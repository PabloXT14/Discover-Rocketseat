# Seletores

Conecta um elemento HTML com o CSS a fim de alterar o elemento.

## Tipos

* Element selector
    - Todos os elementos HTML (ex: h1, p, div, span, ...)
* ID Selector
    - Um elemento que tenha um atributo `id`.
    - Cada id deverá ser único.
* Class Selector
    - Os elementos que contenham um atributo `class`.
    - Podemos ter uma ou mais classes.
* Attribute selector
    - Um elemento que tenha um atributo específico.(ex: [title])
* Pseudo-class selector
    - Elementos em um estado específico (ex: p:hover, p:active, p:visited)

## Múltiplos

Você poderá selecionar múltiplos elementos e aplicar alguma regra css para todos eles.

Usamos uma separação por vírgula para isso

```css
h1, p, a {
    color: red;
}

```