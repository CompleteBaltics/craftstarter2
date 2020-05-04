// webpack.common.js

// node modules
const path = require('path');
const merge = require('webpack-merge');

// webpack plugins
const ManifestPlugin = require('webpack-manifest-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');

// config files
const pkg = require('../package.json');
const settings = require('./webpack.settings.js');

// Configure Babel loader
const configureBabelLoader = (browserList) => {
	return {
		test: /\.js$/,
		exclude: settings.babelLoaderConfig.exclude,
		use: {
			loader: 'babel-loader',
			options: {
				presets: [
					[
						'@babel/preset-env', {
							modules: false,
							useBuiltIns: 'usage',
							corejs: 3,
							targets: {
								browsers: browserList
							}
						}
					]
				],
				plugins: [
					'@babel/plugin-syntax-dynamic-import',
					'@babel/plugin-proposal-class-properties',
					[
							"@babel/plugin-transform-runtime", {
							"regenerator": true
					}
					]
				],
			}
		}
	};
};

// Configure Entries
const configureEntries = () => {
	let entries = {};
	for (const [key, value] of Object.entries(settings.entries)) {
		entries[key] = path.resolve(__dirname, settings.paths.src.js + value);
	}

	return entries;
};

// Configure Font loader
const configureFontLoader = () => {
	return {
		test: /\.(ttf|eot|woff2?)$/i,
		use: [
			{
				loader: 'file-loader',
				options: {
					name: 'fonts/[name].[ext]'
				}
			}
		]
	};
};

// Configure Manifest
const configureManifest = (fileName) => {
	return {
		fileName: fileName,
		basePath: settings.manifestConfig.basePath,
		map: (file) => {
			file.name = file.name.replace(/(\.[a-f0-9]{32})(\..*)$/, '$2');
			return file;
		}
	};
};

// The base webpack config
const baseConfig = {
	name: pkg.name,
	entry: configureEntries(),
	output: {
		path: path.resolve(__dirname, settings.paths.dist.base),
		publicPath: settings.urls.publicPath()
	},
	module: {
		rules: [configureFontLoader()]
	},
	plugins: [
		new WebpackNotifierPlugin({ title: settings.name + ' build', excludeWarnings: true, alwaysNotify: true })
	]
};

// Modern webpack config
const modernConfig = {
	module: {
		rules: [configureBabelLoader(Object.values(pkg.browserslist.modernBrowsers))]
	},
	plugins: [
		new ManifestPlugin(configureManifest('manifest.json'))
	]
};

// Common module exports
// noinspection WebpackConfigHighlighting
module.exports = {
	'modernConfig': merge.strategy({module: 'prepend', plugins: 'prepend'})(baseConfig, modernConfig)
};
