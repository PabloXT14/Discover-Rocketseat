## display: block vs display: inline

- Define como as caixas se comportam em relação as outras caixas
- Comportamento externo das caixas


| **block**                         | **inline**                        |
|-----------------------------------|-----------------------------------|
| Ocupa toda a linha, colocando o   | Elemento ao lado do outro         |
| próximo elemento abaixo desse     |                                   |
|-----------------------------------|-----------------------------------|
| width e height são respeitados    | width e height não funcionam      |
|-----------------------------------|-----------------------------------|
| padding, margin, border irão      | Somente valores horizontais de    |
| funcionar normalmente             | margin, padding e border          |
|-----------------------------------|-----------------------------------|

exemplos
block: `<p> <div> <section>`, todos os headings `<h1><h2>...`
inline: `<a> <strong> <span> <em>`

```css
/* display: block*/
div.block {
    width: 100px;
    height: 100px;
    border: 1px solid red;
    margin: 20px;
}

/* display: inline*/
div.inline {
    display: inline;
    border: 1px solid red;
    width: 100px;
    height: 100px;
    margin: 20px;
}
```