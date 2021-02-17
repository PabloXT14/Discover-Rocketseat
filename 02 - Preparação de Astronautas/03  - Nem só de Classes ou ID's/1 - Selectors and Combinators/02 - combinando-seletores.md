# Combinators

Combinadores, pois eles trabalham para buscar e combinar seletores a fim de aplicar uma estilização

## Descendant combinator

* Identificado por um espaço entre os seletores.
* Busca um elemento dentro de outro

```css
body article h2 {
    color: red;
}

```

## Child combinator

* Identificado pelo sinal `>` entre dois seletores
* Seleciona somente o elemento que é filho direto do pai
* Elementos depois do filho direto serão desconsiderados

```css
body > ul > li {
    color: green;
}


```

## Adjacent sibling combinator

* Identificado pelo sinal ` + ` entre dois seletores
* Seleciona somente o elemento do lado direito que é irmão direto na hierarquia

```html

<h1>Título</h1>

<p>Parágrafo 1</p>
<p>Parágrafo 2</p>

```

```css

h1 + p {
    color: purple;
}
/*somente o parágrafo 1 ganha a cor*/

```

## General sibling combinator

* Identificado pelo sinal ` ~ ` entre dois seletores
* Seleciona todos os elementos irmãos

```html

<h1>Titulo</h1>
<p>Parágrafo 1</p>
<button>Botão</button>
<p>Parágrafo 2</p>

```

```css

h1 ~ p {
    color: orange;
}
/*os dois parágrafos depois do titulo recebem a cor*/
```

## Utilizando combinadores (juntos)

```css
ul > li[class="red"]
```

## Dica

* Seletores muito específicos tendem a causar dificuldades no reuso das regras de estilização dos elementos
* Muitas vezes, um simples uso de classes, torna o trabalho muito mais eficiente.