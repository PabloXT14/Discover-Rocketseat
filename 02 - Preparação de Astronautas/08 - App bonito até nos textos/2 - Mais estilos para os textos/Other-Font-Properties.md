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

------------------------------------------------------------------------

## text-decoration

* Aparência decorativa de um texto
* line: underline | overline | line-through
    * podemos aplicar mais de um valor
* style: wavy | dotted | double | dashed | solid
* color: `<color>` values

```css
p {
    text-decoration: underline; /* shorthand */
}
```
* mais values em: https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration

------------------------------------------------------------------------

## text-align

* Alinhamento de um texto

```css
p {
    text-align: center; /* left | right | center | justify */
}
```
* mais values em: https://developer.mozilla.org/en-US/docs/Web/CSS/text-align

------------------------------------------------------------------------

## text-shadow

* Sombra aplicada a um texto
* Permite múltiplos valores

```css
p {
    text-shadow: 1px 1px 1px red, 
                 2px 2px 1px green; /* offset-x | offset-y | blur-radius | color */
}
```
* mais values em: https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow

------------------------------------------------------------------------

## Shorthand

* font-style, font-variant, font-weight, font-stretch, font-size, line-height, e font-family.
* As `Other-Font-Properties` destacadas neste documento são opicionais no shorthand

```css
p {
    /* -style, -variant, -weight, -stretch, -size, line-height, e -family */
    font: italic normal bold normal 3rem/1.5 Helvetica, Arial, sans-serif;
}
```

------------------------------------------------------------------------

## Referências
* https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Fundamentals