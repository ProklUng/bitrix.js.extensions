# Модуль js.extensions для Битрикса

## Зачем?
 
Экспериментальные цели. Поиск наиболее технологичных решений в максимально-упрощенной инженерной среде.

## Установка

composer.json:

```json
    "repositories": [
        {
            "type": "git",
            "url": "https://github.com/proklung/bitrix.js.extensions"
        }
    ]
```

```composer require proklung/bitrix.js.extensions```

## Пруфы

```https://dev.1c-bitrix.ru/learning/course/index.php?COURSE_ID=43&LESSON_ID=11981```

## Функционал

### Компоненты

Пара оберток:

#### proklung.extension.run

Запуск и инициализация JS extension. По сути обертка над ```php \Bitrix\Main\UI\Extension::load('namespace.extension') ```

```php
$APPLICATION->IncludeComponent('proklung:extension.run',
    '',
    [
        'EXTENSION' => 'proklung.bxui', // JS extension
        'SELECTOR' => 'uix'             // ID

    ],
    false
);
```

или (без шаблона)

```php
$APPLICATION->IncludeComponent('proklung:extension.run',
    '',
    [
        'EXTENSION' => 'proklung.webpacked',
        'NO_TEMPLATE' => true

    ],
    false
);
```

#### proklung.app

```php
$APPLICATION->IncludeComponent('proklung:app',
    '',
    [],
    false
);
```

Подвяжет Vue на селектор `app` (например, на самом верхнем враппере страницы)

### JS extensions

#### bxui

Набор стандартного битриксового UI, обернутого в формат js extension. Форк [```https://github.com/astrotrain55/vue-bitrix24```](пакета). 
Вырезано ненужное, переработано для локальных нужд.

#### vueinvoker

"Предназначен для инициализации Vue компонентов на странице. Он упрощает использование Vue в классическом веб-приложении, 
когда нет возможности использовать один "корневой" экземпляр Vue".

```html
<div class="vue-component" data-component="DemoApp" data-initial='{"test": "data"}'></div>
```

Упакован в extension и вызывается так:

```php
$APPLICATION->IncludeComponent('proklung:extension.run',
    '',
    [
        'EXTENSION' => 'proklung.vueinvoker',
        'NO_TEMPLATE' => true

    ],
    false
);
```

#### webpacked

Заготовка под разработку "расширения" полностью собираемого с помощью Webpack.

#### ui-select

Обертка над "Диалогом выбора сущностей" Битрикс24.

Пример вызова (через компонент-обертку):

```php
              $APPLICATION->IncludeComponent('proklung:ui_select',
                    'bitrix24',
                    [
                        'SELECT_ID' => 'cities',
                        'DISABLED' => true,
                        'VALUES' => (array)$data["ALL_CITIES_LIST"],
                        'SELECTED_VALUE' => 'Москва',
                        'MULTIPLE' => false,
                        'PLACEHOLDER' => 'Города'
                    ],
                    false
                );
```