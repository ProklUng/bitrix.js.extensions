module.exports = {
	input: 'src/bxui.js',
	output: 'dist/bxui.bundle.js',
	namespace: 'BX.Protocol',
	minification: false,
	sourceMaps: false,
	plugins: {
		custom: [
		],
		resolve: true,
	}
};