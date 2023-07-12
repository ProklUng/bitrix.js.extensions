# Использование

```php
\Bitrix\Main\UI\Extension::load('protocol.ui-select');
```

```html
<select data-bitrix2-select_id="tags" type="text"
        multiple
        data-placeholder="Тэги"
        id="tags">
    
    <option value=""></option>
    <option value="11 мая">11 мая</option>
    <option value="9 мая">9 мая</option>
    <option value="АТЭС">АТЭС</option>
    <option value="БРИКС">БРИКС</option>
</select>
```

И как-то так:

```javascript
BX.ready(function () {
    let select = new BX.Protocol.UiSelect(null);
    select.activate();
})
```
