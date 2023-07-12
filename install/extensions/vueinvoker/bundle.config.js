module.exports = {
	input: 'src/vueinvoker.js',
	output: 'dist/vueinvoker.bundle.js',
	namespace: 'BX.Proklung',
	minification: false,
	sourceMaps: false,
	plugins: {
		custom: [
		],
		resolve: true,
	}
};