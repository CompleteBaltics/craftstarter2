module.exports = {
	plugins: [
		require('postcss-import')(),
		require('tailwindcss')('internals/tailwind.config.js'),
		require('postcss-preset-env')({
			autoprefixer: { grid: false },
			features: {
				'nesting-rules': true
			}
		}),
		require('postcss-for'),
		require('postcss-calc')
	]
};
