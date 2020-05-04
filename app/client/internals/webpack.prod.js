// webpack.prod.js - production builds

// node modules
const git = require('git-rev-sync');
const glob = require('glob-all');
const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');

// webpack plugins
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const CriticalCssPlugin = require('critical-css-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const PurgecssPlugin = require('purgecss-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const WhitelisterPlugin = require('purgecss-whitelister');
const zopfli = require('@gfx/zopfli');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const CreateSymlinkPlugin = require('create-symlink-webpack-plugin');

// config files
const common = require('./webpack.common.js');
const pkg = require('../package.json');
const settings = require('./webpack.settings.js');

// Custom PurgeCSS extractor for Tailwind that allows special characters in
// class names.
//
// https://github.com/FullHuman/purgecss#extractor
class TailwindExtractor {
	static extract (content) {
		return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
	}
}

// Configure file banner
const configureBanner = () => {
	const date = new Date();
	return {
		banner: [
			'/*!',
			' * @project        ' + settings.name,
			' * @name           ' + '[filebase]',
			' * @author         ' + pkg.author.name,
			' * @build          ' + date,
			' * @release        ' + git.long() + ' [' + git.branch() + ']',
			' * @copyright      Copyright (c) ' + date.getYear() + ' ' + settings.copyright,
			' *',
			' */',
			''
		].join('\n'),
		raw: true
	};
};

// Configure Compression webpack plugin
const configureCompression = () => {
	return {
		filename: '[path].gz[query]',
		test: /\.(js|css|html|svg)$/,
		threshold: 10240,
		minRatio: 0.8,
		deleteOriginalAssets: false,
		compressionOptions: {
			numiterations: 15,
			level: 9
		},
		algorithm (input, compressionOptions, callback) {
			return zopfli.gzip(input, compressionOptions, callback);
		}
	};
};

// Configure Critical CSS
const configureCriticalCss = () => {
	return (settings.criticalCssConfig.pages.map((row) => {
		const criticalSrc = settings.urls.critical + row.url;
		const criticalDest = settings.criticalCssConfig.base + row.template + settings.criticalCssConfig.suffix;
		let criticalWidth = settings.criticalCssConfig.criticalWidth;
		let criticalHeight = settings.criticalCssConfig.criticalHeight;

		return new CriticalCssPlugin({
			base: './',
			src: criticalSrc,
			dest: criticalDest,
			extract: false,
			inline: false,
			minify: true,
			width: criticalWidth,
			height: criticalHeight,
			penthouse: {
				// blockJSRequests: true
				timeout: 90000
			}
		});
	})
	);
};

// Configure Clean webpack
const configureCleanWebpack = () => {
	return {
		cleanOnceBeforeBuildPatterns: settings.paths.dist.clean,
		verbose: true,
		dry: false
	};
};

// Configure Image loader
const configureImageLoader = (buildType) => {
	return {
		test: /\.(png|jpe?g|gif|svg|webp)$/i,
		use: [
			{
				loader: 'file-loader',
				options: {
					name: 'img/[name].[hash].[ext]'
				}
			},
			{
				loader: 'img-loader',
				options: {
					plugins: [
						require('imagemin-gifsicle')({
							interlaced: true,
						}),
						require('imagemin-mozjpeg')({
							progressive: true,
							arithmetic: false,
						}),
						require('imagemin-optipng')({
							optimizationLevel: 5,
						}),
						require('imagemin-svgo')({
							plugins: [
								{convertPathData: false},
							]
						}),
					]
				}
			}
		]
	};
};

// Configure optimization
const configureOptimization = (buildType) => {
	return {
		// splitChunks: {
		// 	cacheGroups: {
		// 		default: false,
		// 		common: false,
		// 		styles: {
		// 			name: settings.vars.cssName,
		// 			test: /\.(pcss|css)$/,
		// 			chunks: 'all',
		// 			enforce: true
		// 		}
		// 	}
		// },
		minimizer: [
			new TerserPlugin(
				configureTerser()
			),
			new OptimizeCSSAssetsPlugin({
				cssProcessorOptions: {
					map: {
						inline: false,
						annotation: true
					},
					safe: true,
					discardComments: true
				}
			})
		]
	};
};

// Configure Postcss loader
const configurePostcssLoader = (buildType) => {
	return {
		test: /\.(pcss|css)$/,
		use: [
			MiniCssExtractPlugin.loader,
			{
				loader: 'css-loader',
				options: {
					importLoaders: 2,
					sourceMap: true
				}
			},
			{
				loader: 'resolve-url-loader'
			},
			{
				loader: 'postcss-loader',
				options: {
					config: {
						path: path.resolve(__dirname, './postcss.config.js')
					},
					sourceMap: true
				}
			}
		]
	};
};

// Configure PurgeCSS
const configurePurgeCss = () => {
	let paths = [];
	// Configure whitelist paths
	for (const [key, value] of Object.entries(settings.purgeCssConfig.paths)) {
		paths.push(path.join(__dirname, value));
	}

	return {
		paths: glob.sync(paths),
		whitelist: WhitelisterPlugin(settings.purgeCssConfig.whitelist),
		whitelistPatterns: settings.purgeCssConfig.whitelistPatterns,
		extractors: [
			{
				extractor: TailwindExtractor,
				extensions: settings.purgeCssConfig.extensions
			}
		]
	};
};

// Configure terser
const configureTerser = () => {
	return {
		cache: true,
		parallel: true,
		sourceMap: true,
		terserOptions: {
			// compress: {
			// 	drop_console: true
			// }
		}
	};
};

// Configure Webapp webpack
const favIcons = () => {
	return {
			logo: settings.favIcon.from,
			cache: false,
			publicPath: settings.favIcon.public,
			outputPath: settings.favIcon.to,
			favicons: {
					appName: pkg.name,
					appDescription: pkg.description,
					developerName: pkg.author.name,
					developerURL: pkg.author.url,
			}
	};
};

// Production module exports
module.exports = [
	merge(
		common.modernConfig,
		{
			output: {
				filename: path.join('./js', '[name].[chunkhash].js'),
				publicPath: settings.paths.dist.pathUrl
			},
			mode: 'production',
			devtool: 'source-map',
			optimization: configureOptimization(),
			module: {
				rules: [
					configurePostcssLoader(),
					configureImageLoader()
				]
			},
			plugins: [
				new CleanWebpackPlugin(
					configureCleanWebpack()
				),
				new webpack.BannerPlugin(
					configureBanner()
				),
				new MiniCssExtractPlugin({
					path: path.resolve(__dirname, settings.paths.dist.base),
					filename: path.join('./css', '[name].[chunkhash].css')
				}),
				new PurgecssPlugin(
					configurePurgeCss()
				),
				new FaviconsWebpackPlugin(
					favIcons()
				),
				new CreateSymlinkPlugin(
					settings.createSymlinkConfig,
					true
				),
				new webpack.optimize.ModuleConcatenationPlugin(),
				new CompressionPlugin(
					configureCompression()
				)
			].concat(
				configureCriticalCss()
			)
		}
	)
];