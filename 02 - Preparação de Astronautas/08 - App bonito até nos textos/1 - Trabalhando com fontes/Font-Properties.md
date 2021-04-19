# Trabalhando com fontes

Tipografia transmite mensagem 

    - negrito
    - tamanho
    - estilo

---------------------------------------------------------------------

## Basic Font Properties

* font-family
* font-weight
* font-style
* font-size

---------------------------------------------------------------------

## Font Family

* Tipo de fonte de um elemento
* Lista de fontes e ordem de prioridade
* Inclui *fallback  font* (Fonte de Escape)

```css
p {
    font-family: "Times New Roman", Times, serif;
}
```
    - serif: font com serifa, traço/barra nas extremidades das letras
    - sans-serif: font sem a serifa

---------------------------------------------------------------------

## Font Weight

* Peso da fonte

```css
p {
    font-weight: bold
}
```
* mais values do font-weight: https://www.w3.org/TR/css-fonts-3/

---------------------------------------------------------------------

## Font Style

* Estilo da fonte

```css
span {
    font-style: italic;
}
```
* mais values do font-style: https://www.w3.org/TR/css-fonts-3/

---------------------------------------------------------------------

## Font Size

* O tamanho da fonte

```css
p {
    font-size: 18px;
    /* font-size: 1.8rem; */
    /* font-size: 1.2em; */
}
```

---------------------------------------------------------------------

## Web Fonts

- fontes do sistema X fontes da web
- como usar fontes para web?

    * @font-face (adiciona fontes que fizemos download a salvamos na nossa aplicação)
    * @import (adiciona pelo css uma font da web)
    * link (adiciona pelo html uma font da web)
- Dica: use o [Google Fonts](https://fonts.google.com) para usar fontes da Web

---------------------------------------------------------------------

### Referências

* https://www.w3.org/TR/css-fonts-3/
* https://css-tricks.com/snippets/css/using-font-face/