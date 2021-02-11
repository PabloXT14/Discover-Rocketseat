# Selectors

Conecta um elemento HTML com o CSS

## Tipos 

* Global selector `*`
* Element/Type selector `h1, h2, p, div`
* ID Selector `#box, #container`
* Class Selector `.red, .m-4`
* Attribute selector, Pseudo-class, Pseudo-element, e outros

```html

<div id="container" class="m-4">
    <h1>Título</h1>
    <h2>Subtítulo</h2>
</div>

```


```css
*{
    margin: 0;
}

#container{
    width: 200px;
}

.m-4{
    margin: 40px;
}

h1, h2{
    color: green;
    font-size: 60px;
    background: gray;
}



```