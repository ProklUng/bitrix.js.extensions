<?
if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true)
{
	die();
}

return [
	'css' => 'dist/vueinvoker.bundle.css',
	'js' => 'dist/vueinvoker.bundle.js',
	'rel' => [
		'main.polyfill.core',
		'ui.vue',
		'vue2-dropzone',
		'vue2-dropzone/dist/vue2Dropzone.min.css',
	],
	'skip_core' => true,
];