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

* :nth-of-type()
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

* :nth-child() 
```html
<article>
    <h3>Titulo</h3>
    <p>P1</p>
    <p>P2</p>
    <p>P3</p>
</article>
```
```css
article p:nth-child(2) {
    color: blue;
    /*seleciona o segundo filho do article que o P1, mas colocar p:nth-child(1) não irá alterar nada pois o primeiro filho do article não é um <p> */
}

```
    - :nth-child(odd) = seleciona os filhos ímpares  
    - :nth-child(even) = seleciona os filhos pares
    * Obs: também funciona com o :nth-of-type()

## Ações do usuário

* :hover (quando o usuário passa o mouse por cima de um elemento)
```css
a:hover {
    color: red;
    /*deixa o link de outra cor*/
}
```
* :focus (quando um elemento ganhou o focu do usuário)
```css
input:focus {
    border-color: blue;
    /*a borda do input ao clicar sobre ele fica azul*/
    outline: none;/*tira a bordinha preta padrão, recomenda-se deixar esta parta acessibilidade*/
}
```