module.exports = {
	input: 'src/app.js',
	output: 'dist/app.bundle.js',
	namespace: 'BX.Protocol',
	minification: false,
	sourceMaps: false,
	plugins: {
		custom: [
		],
		resolve: true,
	}
};