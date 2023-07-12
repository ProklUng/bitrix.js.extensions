<?php
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) {
    die();
}

/**
 * @var CMain $APPLICATION
 * @var array $arParams
 * @var array $arResult
 */
$APPLICATION->IncludeComponent('proklung:extension.run',
    '',
    [
        'EXTENSION' => 'protocol.app',
        'SELECTOR' => 'app',
    ],
    false
);
