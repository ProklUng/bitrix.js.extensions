<?php

use Bitrix\Main\Page\Asset;
use Bitrix\Main\UI\Extension;

if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) {
    die();
}

/**
 * Class ProklUngVueComponentRun
 */
class ProklUngVueComponentRun extends CBitrixComponent
{
    /**
     * @inheritDoc
     */
    public function executeComponent()
    {
        Extension::load($this->arParams['EXTENSION']);
        $this->addInitScript();

        if (empty($this->arParams['NO_TEMPLATE'])) {
            $this->includeComponentTemplate();
        }
    }

    /**
     * @return void
     */
    private function addInitScript() : void
    {
        $selector = (string)$this->arParams['SELECTOR'];
        if ($selector) {
            $selector = '#' . $selector;
        }

        $asset = Asset::getInstance();
        ob_start(); ?>
        <script>
            BX.ready(function() {
                if (typeof BX.<?=$this->arParams['NAMESPACE_EXTENSION']?>.<?=$this->arParams['NAME_EXTENSION']?> !== 'undefined') {
                    new BX.<?=$this->arParams['NAMESPACE_EXTENSION']?>.<?=$this->arParams['NAME_EXTENSION']?>('<?=$selector?>');
                }
            });
        </script>

        <?php $this->arResult['SCRIPT_INIT_STRING'] = (string)ob_get_clean();
        $asset->addString($this->arResult['SCRIPT_INIT_STRING']);
    }

    /**
     * @inheritDoc
     * @throws Exception
     */
    public function onPrepareComponentParams($arParams)
    {
        $arParams['CACHE_TYPE'] = 'N';
        $arParams['CACHE_TIME'] = 0;

        if (empty($arParams['EXTENSION'])) {
            throw new Exception('Не задан JS extension');
        }

        if (empty($arParams['SELECTOR']) && empty($arParams['NO_TEMPLATE'])) {
            throw new Exception('Не задан селектор');
        }

        $parsedNamespace = explode('.', $arParams['EXTENSION']);
        if (count($parsedNamespace) < 2) {
            throw new Exception('Неправильный формат JS extension. Требуется "namespace"."name"');
        }

        $arParams['NAMESPACE_EXTENSION'] = ucfirst($parsedNamespace[0]);
        $arParams['NAME_EXTENSION'] = ucfirst($parsedNamespace[1]);

        return $arParams;
    }
}
