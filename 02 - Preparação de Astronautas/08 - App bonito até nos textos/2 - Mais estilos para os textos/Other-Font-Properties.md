# Atribuindo mais estilos às fontes

## font-variant

* aplica variações na apresentação de uma fonte(de um font-family) 

```css
p {
    font-variant: small-caps
}
```
* mais values em: https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant

------------------------------------------------------------------------

## font-stretch

* alargamento ou encolhimento da fonte
* aceita palavra-chaves como: expanded, condensed, normal
* aceita porcentagens de 50% a 200%
* obs: nem todas os font-family vão aceitar todos os values do font-stretch

```css
p {
    font-stretch: expanded;
}
```
* mais values em: https://developer.mozilla.org/en-US/docs/Web/CSS/font-stretch

------------------------------------------------------------------------

## letter-spacing

* Espaços entre caracteres/letras

```css
p {
    letter-spacing: 4px;
}
```
* mais values em: https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing

------------------------------------------------------------------------

## word-spacing

* Espaço entre caracteres/palavras

```css
p {
    word-spacing: 8px;
}
```
* mais values em: https://developer.mozilla.org/en-US/docs/Web/CSS/word-spacing

------------------------------------------------------------------------

## line-height

* Espaços entre linhas
* Pode ser com unidades ou sem unidades de medida
* Comuns: 1.5 ou 2

```css
p {
    line-height: 1.6;
}
```
* mais values em: https://developer.mozilla.org/en-US/docs/Web/CSS/line-height

------------------------------------------------------------------------

## text-transform

* Transformação do texto

```css
p {
    text-transform: uppercase; /* capitalize | lowercase | none */
}
```
* mais values em: https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform





## Referências
* https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Fundamentals