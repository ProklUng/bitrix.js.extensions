<?php

if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) {
    die();
}

/**
 * Class ProklUngVueApp
 */
class ProklUngVueApp extends CBitrixComponent
{
    /**
     * @inheritDoc
     */
    public function executeComponent()
    {
        $this->includeComponentTemplate();
    }
}
