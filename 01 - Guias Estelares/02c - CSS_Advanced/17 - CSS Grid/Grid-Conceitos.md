# CSS Grid

## O que é CSS Grid?
- CSS Grid é o sistema de layout mais poderoso em CSS. É um sistema bidimensional, o que significa que pode ser usado para elementos de layout em linhas e colunas ao mesmo tempo.

## Grid vc Flexbox
- A principal diferença é:
    - **Flexbox**: gerencia apenas 1 dimensão por vez(elementos na vertical ou horizontal)
    - **Grid**: gerenciar 2 dimensões ao mesmo tempo (elementos na vertical e horizontal)

## Grid Main Concepts
<img src="./assets/Grid Main Concepts.jpg" alt="Grid Main Concepts">

- **Grid Container**: o elemento no qual `display: grid` é aplicado. É o pai direto de todos os itens da grade. Neste exemplo "container" é o contêiner de grid(grade).
```html
    <div class="container">
    <div class="item item-1"> </div>
    <div class="item item-2"> </div>
    <div class="item item-3"> </div>
    </div>
```

- **Grid Item**: os filhos (ou seja, descendentes diretos) do contêiner com grid. Aqui, os elementos item são itens da grid, mas sub-itens não são.
```html
    <div class="container">
    <div class="item"> </div>
    <div class="item">
        <p class="sub-item"> </p>
    </div>
    <div class="item"> </div>
    </div>
```  

- **Grid Line**: As linhas divisórias que constituem a estrutura da grade. Eles podem ser verticais (“linhas de grade da coluna”) ou horizontais (“linhas de grade da linha”) e residir em qualquer um dos lados de uma linha ou coluna. Aqui, a linha amarela é um exemplo de uma linha de grade de coluna.
<img src="./assets/terms-grid-line.svg" alt="Term Grid Line" style="
    width: 300px;
    display: block;
    margin: auto;
">

- **Grid Track**: O espaço entre duas linhas de grade adjacentes. Você pode pensar neles como colunas ou linhas da grade. Aqui está a trilha da grade entre a segunda e a terceira linhas da grade.
<img src="./assets/terms-grid-track.svg" alt="Term Grid Line" style="
    width: 300px;
    display: block;
    margin: auto;
">

- **Grid Area**: O espaço total rodeado por quatro linhas de grade. Uma área de grade pode ser composta de qualquer número de células de grade. Esta é a área da grade entre as linhas 1 e 3 da grade e as linhas 1 e 3 da grade da coluna.
<img src="./assets/terms-grid-area.svg" alt="Term Grid Line" style="
    width: 300px;
    display: block;
    margin: auto;
">

- **Grid Cell**: O espaço entre duas linhas adjacentes e duas linhas de grade de colunas adjacentes. É uma única “unidade” da grade. Esta é a célula da grade entre as linhas 1 e 2 da grade da linha e as linhas 2 e 3 da grade da coluna.
<img src="./assets/terms-grid-cell.svg" alt="Term Grid Line" style="
    width: 300px;
    display: block;
    margin: auto;
">

## CSS Grid Properties
<img src="./assets/CSS Grid Properties.jpg" alt="Grid Main Concepts">


```note
* Veja mais sobre CSS Grid em: https://css-tricks.com/snippets/css/complete-guide-grid/
```