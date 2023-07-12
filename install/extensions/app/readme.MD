# Использование

`id="app"` где-нибудь в самом возможном верху

Желательно в `footer.php` шаблона:

```php
$APPLICATION->IncludeComponent('vue:app',
    '',
    [],
    false
);
```

И можно писать в html где можно:

```html
<div>
    <fileloader apiurl="https://httpbin.org/post"></fileloader>
</div>
```

## Коллекция компонентов

См. файл `src/collection.js`.