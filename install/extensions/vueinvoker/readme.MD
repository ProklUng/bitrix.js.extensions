# Использование

Желательно в `footer.php` шаблона:

```php
$APPLICATION->IncludeComponent('vue:extension.run',
    '',
    [
        'EXTENSION' => 'protocol.vueinvoker',
        'NO_TEMPLATE' => true

    ],
    false
);
```

В нужном месте кода:

```html
<div class="vue-component" data-component="FileLoader" data-initial='{"apiurl": "http://test.url/"}'></div>

<div class="vue-component" data-component="ExampleComponent" data-initial='{}'></div>
```
## Коллекция компонентов

См. файл `src/collection.js`.