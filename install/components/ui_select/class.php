<?php

namespace Protocol\Components;

use CBitrixComponent;
use Exception;
use Protocol\Event\UsersCacher;
use Protocol\Tools\Constants;

/**
 * Class UiSelect
 */
class UiSelect extends CBitrixComponent
{
    /**
     * @inheritDoc
     */
    public function executeComponent()
    {
        $this->arResult['VALUES'] = (array)$this->arParams['VALUES'];
        $this->arResult['arResult'] = (array)$this->arParams['arResult'];
        $this->arResult['SOURCE_PROP'] = '';
        if (!empty($this->arParams['SOURCE_PROP'])) {
            $this->arResult['SOURCE_PROP'] = $this->arParams['SOURCE_PROP'];
        }

        if (empty($this->arParams['DISABLED_NOT_ATTACHED'])) {
            $this->arParams['DISABLED_NOT_ATTACHED'] = true;
        }

        $this->includeComponentTemplate();
    }
}