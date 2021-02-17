# Pseudo-classes

É um tipo de seletor que irá selecionar um elemento que estiver em um estado específico.

Exemplo: é o primeiro elemento dentro de uma caixa, ou, o elemento está com o ponteiro do mouse em cima dele.

Pseudo-classes começam com 2 pontos seguido do nome da pseudo class
`:pseudo-class-name`

## Selecionando elementos com pseudo-classes

* :first-child
```html
<ul>
    <!-- <h2>Titulo</h2> -->
    <li>item 1</li>
    <li>item 2</li>
    <li>item 3</li>
</ul>
```
```css

ul li:first-child {
    color: red;
    /*se o h2 se tornar o primeiro filho a cor não se aplicará ao 1ºli*/
}
```

* nth-of-type()
```html
<article>
    <h2></h2>
    <p>P1</p>
    <p>P2</p>
    <p>P3</p>
</article>
```
```css
article p:nth-of-type(2) {
    font-weight: bold;
    /*seleciona o segundo parágrafo dentro de article*/
}
```