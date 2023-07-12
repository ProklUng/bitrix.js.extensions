<?php
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) {
    die();
}

/**
 * @var array $arParams
 * @var array $arResult
 */

/*
 * Пример вызова:
 * $APPLICATION->IncludeComponent('proklung:extension.run',
    'example',
    [
        'EXTENSION' => 'proklung.floader', // JS extension
        'SELECTOR' => 'application', // ID
    ],
    $component
);
 */
?>
<div id="<?=$arParams['SELECTOR']?>"></div>
<script id="tmpl" type="text/x-template">
    <div id="outside">{{ greatings }}</div>
</script>

