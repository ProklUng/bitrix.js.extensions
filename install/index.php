<?php

use Bitrix\Main\Application;
use Bitrix\Main\IO\Directory;
use Bitrix\Main\Config\Option;
use Bitrix\Main\Localization\Loc;

Loc::loadMessages(__FILE__);

if (class_exists("js_extensions")) {
    return;
}

/**
 * Class base_setup
 */
class js_extensions extends CModule
{
    public $MODULE_ID = "js.extensions";

    public $MODULE_VERSION;
    public $MODULE_VERSION_DATE;
    public $MODULE_NAME;
    public $MODULE_DESCRIPTION;
    public $PARTNER_NAME;
    public $PARTNER_URI;

    /**
     * @var string[] $COMPONENTS Компоненты, устанавливаемые модулем.
     */
    protected $COMPONENTS = [
        'app',
        'extension.run',
        'ui_select',
    ];

    /**
     * Constructor.
     */
    function __construct()
    {
        $arModuleVersion = [];

        include __DIR__ . '/version.php';

        $this->MODULE_VERSION = $arModuleVersion["VERSION"];
        $this->MODULE_VERSION_DATE = $arModuleVersion["VERSION_DATE"];

        $this->MODULE_NAME = Loc::getMessage("JS_EXTENSION_SETUP_MODULE_NAME");
        $this->MODULE_DESCRIPTION = Loc::getMessage("JS_EXTENSION_SETUP_MODULE_DESC");
        $this->PARTNER_NAME = Loc::getMessage("JS_EXTENSION_SETUP_PARTNER_MODULE_NAME");
        $this->PARTNER_URI = Loc::getMessage("JS_EXTENSION_SETUP_PARTNER_URI");
    }

    /**
     * @inheritDoc
     */
    public function DoInstall()
    {
        $this->InstallJsExtensions();
        $this->InstallComponents();

        RegisterModule($this->MODULE_ID);
    }

    /**
     * @return void
     */
    private function installComponents()
    {
        $components = $this->GetModuleDir().'/install/components';
        if (Directory::isDirectoryExists($components)) {
            $vendor = 'proklung';
            CopyDirFiles($components, Application::getDocumentRoot() . "/bitrix/components/{$vendor}/", true, true);
        }
    }

    /**
     * @return void
     */
    private function uninstallComponents() : void
    {
        foreach ($this->COMPONENTS as $component) {
            $vendor = 'proklung';
            Directory::deleteDirectory(Application::getDocumentRoot() . "/bitrix/components/{$vendor}/$component/");
        }

    }

    /**
     * @inheritDoc
     */
    public function DoUninstall()
    {
        $this->uninstallJsExtensions();
        $this->uninstallComponents();

        Option::delete($this->MODULE_ID);
        UnRegisterModule($this->MODULE_ID);

        return true;
    }

    /**
     * @return mixed
     */
    public function InstallJsExtensions()
    {
        $extensions = $this->GetModuleDir().'/install/extensions';
        if (Directory::isDirectoryExists($extensions)) {
            $vendor = 'proklung';
            CopyDirFiles($extensions, Application::getDocumentRoot() . "/bitrix/js/{$vendor}/", true, true);
        }
    }

    /**
     * @return void
     */
    function uninstallJsExtensions() : void
    {
        $templates = Application::getDocumentRoot() . "/bitrix/js/{$this->getVendor()}/";
        if (Directory::isDirectoryExists($templates)) {
            Directory::deleteDirectory($templates);
        }

    }

    /**
     * Вендор модуля.
     *
     * @return string
     */
    private function getVendor() : string
    {
        return (string)\substr($this->MODULE_ID, 0, \strpos($this->MODULE_ID, '.'));
    }

    /**
     * Директория, где лежит модуль.
     *
     * @return string
     */
    private function getModuleDir() : string
    {
        foreach (['/local/modules/', '/bitrix/modules/'] as $path) {
            if (@file_exists($_SERVER['DOCUMENT_ROOT']. $path . $this->MODULE_ID)) {
                return $_SERVER['DOCUMENT_ROOT']. $path . $this->MODULE_ID;
            }
        }

        return '';
    }

    /**
     * @param string $src
     *
     * @return void
     */
    private function rrmdir(string $src)
    {
        if (!@file_exists($src)) {
            return;
        }

        $dir = opendir($src);
        while(false !== ( $file = readdir($dir)) ) {
            if (( $file !== '.' ) && ( $file !== '..' )) {
                $full = $src . '/' . $file;
                if (is_dir($full) ) {
                    $this->rrmdir($full);
                }
            }
        }

        closedir($dir);
        rmdir($src);
    }


}

