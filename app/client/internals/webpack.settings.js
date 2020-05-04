// webpack.settings.js - webpack settings config

// node modules
require('dotenv').config();

// Webpack settings exports
// noinspection WebpackConfigHighlighting
module.exports = {
	name: 'Example project',
	copyright: 'Example copyright',
	paths: {
		src: {
			base: '../src/',
			css: '../src/css/',
			js: '../src/js/'
		},
		dist: {
			base: '../../craft/web/dist/',
			clean: [
				'**/*'
			],
			pathUrl: '/dist/'
		},
		templates: '../../craft/templates/'
	},
	urls: {
		critical: 'https://example.local/',
		publicPath: () => process.env.PUBLIC_PATH || '/'
	},
	vars: {
		cssName: 'styles'
	},
	entries: {
		"index": "index.js",
		"router": "router.js"
	},
	babelLoaderConfig: {
		exclude: /node_modules/
	},
	favIcon: {
		from: './src/assets/favicon/logo.png',
		to: 'favicon',
		public: '/dist/favicon'
	},
	criticalCssConfig: {
		base: '../craft/web/dist/criticalcss/',
		suffix: '_critical.min.css',
		criticalHeight: 1600,
		criticalWidth: 2550,
		pages: [
			{
				url: '',
				template: 'index'
			}
		]
	},
	devServerConfig: {
		public: () => process.env.DEVSERVER_PUBLIC || 'https://localhost:8080',
		host: () => process.env.DEVSERVER_HOST || '0.0.0.0',
		poll: () => process.env.DEVSERVER_POLL || true,
		port: () => process.env.DEVSERVER_PORT || 8080
	},
	manifestConfig: {
		basePath: '/dist/'
	},
	purgeCssConfig: {
		paths: [
			'../../craft/templates/**/*.{twig,html}'
		],
		whitelist: [
			'../src/css/components/**/*.{css,pcss}',
			'../src/css/components/vendor/aos.pcss'
		],
		// whitelistPatterns: [/(opacity-)\w+/g], // only whitelist some of the opacity- (this is strange, or what?)
		extensions: [
			'html',
			'js',
			'twig'
		]
	},
	createSymlinkConfig: [
		{
			origin: 'img/favicons/favicon.ico',
			symlink: '../../favicon.ico'
		}
	],
	webappConfig: {
			logo: "./src/assets/favicon-src.png",
			prefix: "img/favicons/"
	},
};
