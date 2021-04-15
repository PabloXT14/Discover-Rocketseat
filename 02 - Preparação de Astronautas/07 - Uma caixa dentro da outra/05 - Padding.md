## padding

Preenchimento interno da caixa

- padding-top | padding-right | padding-bottom | padding-left
- values: `<lenght>` | `<percentage>`

```css
div {
    /* shorthand */
    padding: 12px 16px 10px 4px;
    padding: 12px 16px 0;
    padding: 8px 16px;
    padding: 8px;
}
```
* ATENÇÃO!
```
    Padding poderá causar diferença na largura de um elemento (se box-sizing: content-box);
```