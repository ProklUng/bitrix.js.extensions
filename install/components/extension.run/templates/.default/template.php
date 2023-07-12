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
        'EXTENSION' => 'proklung.floader', // JS estension
        'SELECTOR' => 'application', // ID
    ],
    $component
);
 */ ?>

<div id="<?=$arParams['SELECTOR']?>-1">
</div>
