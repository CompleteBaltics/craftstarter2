// webpack.dev.js - developmental builds
const MODERN_CONFIG = 'modern';

// node modules
const merge = require('webpack-merge');
const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const sane = require('sane');
// const Dashboard = require('webpack-dashboard');
// const DashboardPlugin = require('webpack-dashboard/plugin');
// const dashboard = new Dashboard();

// config files
const common = require('./webpack.common.js');
const settings = require('./webpack.settings.js');

// Configure the webpack-dev-server
const configureDevServer = (buildType) => {
	let https = false;
	// let publicUrl = settings.devServerConfig.public();

	// add ssl certs if we are using a public url with https protocol
	// if (publicUrl.indexOf('https') === 0) {
	// 	https = {
	// 		key: fs.readFileSync('./internals/ssl/private.key'),
	// 		cert: fs.readFileSync('./internals/ssl/private.crt'),
	// 		ca: fs.readFileSync('./internals/ssl/private.pem')
	// 	};
	// }

	return {
		public: settings.devServerConfig.public(),
		contentBase: path.resolve(__dirname, settings.paths.templates),
		host: settings.devServerConfig.host(),
		port: settings.devServerConfig.port(),
		https: https,
		disableHostCheck: true,
		hot: true,
		overlay: true,
		watchContentBase: true,
		watchOptions: {
			poll: !!parseInt(settings.devServerConfig.poll()),
			ignored: /node_modules/
		},
		headers: {
			'Access-Control-Allow-Origin': '*'
		},
		// Use sane to monitor all of the templates files and sub-directories
		before: (app, server) => {
				const watcher = sane(path.join(__dirname, settings.paths.templates), {
						glob: ['**/*'],
						poll: !!parseInt(settings.devServerConfig.poll()),
				});
				watcher.on('change', function(filePath, root, stat) {
						console.log('  File modified:', filePath);
						server.sockWrite(server.sockets, "content-changed");
				});
		},
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
			}
		]
	};
};

// Configure the Postcss loader
const configurePostcssLoader = (buildType) => {
	return {
		test: /\.(pcss|css)$/,
		use: [
			{
				loader: 'style-loader'
			},
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

// Development module exports
module.exports = [
	merge(
		common.modernConfig,
		{
			output: {
				filename: path.join('./js', '[name].[hash].js'),
				publicPath: settings.devServerConfig.public() + '/'
			},
			mode: 'development',
			devtool: 'inline-source-map',
			devServer: configureDevServer(MODERN_CONFIG),
			module: {
				rules: [
					configurePostcssLoader(MODERN_CONFIG),
					configureImageLoader(MODERN_CONFIG)
				]
			},
			plugins: [
				new webpack.HotModuleReplacementPlugin(),
				// new DashboardPlugin(dashboard.setData),
			]
		}
	)
];
