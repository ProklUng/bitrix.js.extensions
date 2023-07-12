<?php

if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) {
    die();
}
/**
 * @var array $arResult
 * @var array $arParams
 * @var CMain $APPLICATION
 * @var $component
 */
CModule::IncludeModule('proklung.js.extensions');
\Bitrix\Main\UI\Extension::load('proklung.ui-select');

if (empty($arResult['VALUES'])) {
    return;
} ?>

<select data-bitrix2-select_id="<?=$arParams['SELECT_ID']?>" type="text"
        <?php if (!empty($arParams['MULTIPLE'])) :?>
            multiple
        <?php endif?>

        <?php if (!empty($arParams['PLACEHOLDER'])) :?>
            data-placeholder="<?=$arParams['PLACEHOLDER']?>"
        <?php endif?>
        class="<?php if (!empty($arParams['SELECT_CLASS'])) :?>
                                    <?=$arParams['SELECT_CLASS']?>
                            <?php endif?>
        "
        <?php if (!empty($arParams['SELECT_ID'])) :?>
            id="<?=$arParams['SELECT_ID']?>"
        <?php endif;?>
    <?php if (!empty($arParams['DISABLED'])) : ?>
        disabled
    <?php endif; ?>
>
    <option value=""></option>
    <?php foreach ($arResult['VALUES'] as $value) : ?>
        <option value="<?=$value["UF_XML_ID"]?>"
            <?php if (!empty($arParams['SELECTED_VALUE'])) : ?>
                <?php if (!is_array($arParams['SELECTED_VALUE']) && $arParams['SELECTED_VALUE'] == $value["UF_XML_ID"]) : ?>
                    selected
                <?php endif;?>
                <?php if (is_array($arParams['SELECTED_VALUE']) && in_array($value["UF_XML_ID"], $arParams['SELECTED_VALUE'])) : ?>
                    selected
                <?php endif;?>
            <?php endif; ?>
        >
            <?=$value["UF_TITLE"]?>
        </option>
    <?php endforeach;?>
</select>
