## box-sizing

Define como será calculado o tamanho total da caixa

- `content-box` (padrão): faz com que a caixa não preserve o tamanho definido no width/height, quando se aumenta o padding, por exemplo, todo o tamanho da caixa também aumenta como um todo.
- `border-box` (mais recomendado): torna o tamanho da caixa fixo de acordo com a borda, ou seja, mesma alteranto outras propriedades o tamanho da caixa estará de acordo com o width/height.

```css
div {
    box-sizing: border-box;
}
```