# Variáveis

* Nomes simbólicos para receber algum valor (reservando espaço na memória do pc para guardar esse valor)
* Atalhos de código
* Identificadores
* 3 palavras reservadas para criar uma variável
    * var 
    * let
    * const

```js
//var (legado)
var clima = "Quente"
clima = "Frio";
console.log(clima);

//let (mais atual, semelhante ao var)
let clima = "Quente"
clima = "Nublado"
console.log(clima);

//const (constante)
const clima = "Quente"
//clima = "Frio" -> não pode fazer isto pois clima é uma variável constante, ou seja, tem um único valor constante.
console.log(clima);

```