## margin

Espaços externos entre os elementos

- margin-top | margin-right | margin-bottom | margin-left
- values: `<lenght>` | `<percentage>` | auto

```css
div {
    /* shorthand */
    margin: 12px 16px 10px 4px;
    margin: 12px 16px 0;
    margin: 8px 16px;
    margin: 8px;
}
```

* ATENÇÃO!
```
    Cuidado com margin collapsing (top se junta ao bottom)
```
- ex:
```css
div.n1 {
    margin-bottom: 8px; 
}

div.n2 {
    margin-top: 8px;
}

/* 
devido ao margin collapsing, o margin-bottom da `div.n1` se junta com o margin-top da `div.n2`, assim não se tem a soma do top com o bottom (=16px), mais sim se preserva a distância entre as duas caixas (8px), isto só acontece com margin-top e margin-bottom 
*/
```
