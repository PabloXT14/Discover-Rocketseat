/* # ========== SCOPE ==========

* Escopo determina a visibilidade de alguma variável no JS

## ===== Block Statement (Declaração de Bloco) =====
- Vamos iniciar um bloco
{
    //aqui dentro é um bloco e posso colocar qualquer código
}// aqui fechamos o bloco

- O bloco, também criará um novo escopo. Chamamos de `block-scoped (escopo de bloco)`

## ===== var (Scope de var) =====
- <var> é global e poderá funcionar fora de um escopo de bloco
- Mas também pode agir de maneira local, através da propriedade Hoisting (Elevação)
- Hoisting é o comportamento padrão do JavaScript de mover todas as declarações para o topo do escopo atual (para o topo do script atual ou da função atual).
- Demonstração:

console.log('> existe x antes do bloco', x);

{
    var x = true;//exeperimente tirar o <var>, assim o variável será criada no objeto window de forma global.
}

console.log('> existe x depois do bloco? ', x);


## ===== let e const (Scope de let e const) =====
- const e let são locais e só funcionam no escopo onde foi criada

console.log('> existe y antes do bloco', y);//vai dar erro pois y não pertence a este scope

{
    let y = 0;
    console.log('existe y neste bloco', y);//funciona pois y pertence a este scope
}

console.log('> existe y depois do bloco?', y);//vai dar erro pois y não pertence a este scope


* Obs: é por conta deste flexibilidade que o var tem, que não se recomenda utilizá-lo, mas sim o let e const, pois este vão pertencer ao escopo de origem.


## ===== Stric Mode (Modo Estrito) =====
- O objetivo de "use strict"é indicar que o código deve ser executado em "modo estrito".
- Com o modo estrito, você não pode, por exemplo, usar variáveis ​​não declaradas.
- Declaração:
    * O modo estrito é declarado adicionando "use strict"; ao início de um script ou função
    * Declarado no início de um script, tem escopo global (todo código do script será executado em modo estrito):
- Ex: (teste o código)
"use strict";
x = 3.14;// This will cause an error because x is not declared

*/

function print() {
    x = 7
    console.log(x)
}

print()
console.log(x)
console.log(window)
