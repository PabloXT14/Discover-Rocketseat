# Tipos dinâmicos

* O JS é uma linguagem fracamente tipada e dinâmica (podemos trocar com facilidade o tipo de dado de uma variável)
- Variáveis não precisam ter um tipo previamente definido
- Podemos mudar o conteúdo da variável

String name = "Pablo"//linguagem altamente tipada
let name = "Pablo"//fracemente tipada, pois o tipo da variavel pode mudar  
name = 2;

```js
let clima = "Quente";

// clima = 2; -> se descomentar o tipo da variáve clima muda
console.log(typeof clima);//mostra o tipo da variável (se é string, number, ...)
```