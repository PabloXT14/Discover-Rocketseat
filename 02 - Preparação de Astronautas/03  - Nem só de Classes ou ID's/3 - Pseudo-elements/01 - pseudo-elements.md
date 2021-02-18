# Pseudo-elements

Com pesudo-elements nós podemos adicionar elementos HTML pelo próprio CSS

Estrutura:
`::pseudo-element-name`

## Exemplos

* ::before (adiciona algo antes do elemento html)
```css
li::before {
    content=" < ";/*obrigatório*/
}
```

* ::after (adiciona algo depois do elemento html)
```css
li::after {
    content: " ~ ";/*obrigatório*/
}
```
* ::first-line (edita a primeira linha de um elemento html)
```css
p::first-line {
    font-weight: bold;
}
```

* ::selection (edita o elemento html se ele for selecinado)
```css
p::selection {
    background: blue;
}
```

## Referência

https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements