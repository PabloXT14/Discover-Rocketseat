# Scope

* Escopo determina a visibilidade de alguma variável no JS

# Block Statement (Declaração de Bloco)
```js
// vamos iniciar um bloco
{
    //aqui dentro é um bloco e posso colocar qualquer código
}// aqui fechamos o bloco
```

O bloco, também criará um novo escopo. Chamamos de 
`block-scoped (escopo de bloco)`

## var (Scope de var)
```js
//var é global e poderá funcionar fora de um escopo de bloco
// Mas também pode agir de maneira local, através da propriedade Hoisting (Elevação)
//Demonstração:

console.log('> existe x antes do bloco', );

{
    var x = true;
}

console.log('> existe x depois do bloco? ', x);

```

## let e const (Scope de let e const)
```js
// const e let são locais e só funcionam no escopo onde foi criada

console.log('> existe y antes do bloco', y);//vai dar erro pois y não pertence a este scope

{
    let y = 0;
    console.log('existe y neste bloco', y);//funciona pois y pertence a este scope
}

console.log('> existe x depois do bloco?', y);//vai dar erro pois y não pertence a este scope
```

* Obs: é por conta deste flexibilidade que o var tem que não se recomenda utilizá-lo, mas sim o let e const, pois este vão pertencer ao escopo de origem. 