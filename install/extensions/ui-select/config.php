<?
if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true)
{
	die();
}

return [
	'css' => 'dist/ui-select.bundle.css',
	'js' => 'dist/ui-select.bundle.js',
	'rel' => [
		'main.polyfill.core',
		'ui.entity-selector',
	],
	'skip_core' => true,
];