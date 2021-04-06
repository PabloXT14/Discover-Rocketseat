# Como funciona ? 
* Vamos ver o motivo do Node.js ser tão rápido

## Imagine...
Uma batalha entre 2 restaurantes...
Qual terá o melhor atendimento?


**Restaurante do Tio Apache**
* Diferencial: cada cliente tem seu próprio garçon

* Um cliente vai fazer o pedido de uma pizza
    - Um garçon é direcionado até sua mesa
    - Pega o pedido e leva até a cozinha, para o chefe preparar
    - O chefe, por regra do restaurante, irá proibir e bloquear o garçon de voltar para o cliente, até que o pedido fique pronto
    - O cliente queria muito fazer mais pedidos, mas não pode, pois o garçon está 
    - Após o pedido ficar pronto, o garçon leva de volta para o cliente
* O cliente foi embora e por regra do restaurante, o garçon é despedido
* Chegou 100 clientes numa noita
    - O gerente precisou contratar mais garçon...
```
😴 É um serviço caro e de primeira, mas lento né? A regra de bloquear os garçons e ter que contratar um garçon para cada cliente, torna o serviço caro e lento.
```

**Restaurante do Noderson**
* Diferencial: o garçon de nome Eveneto Lupin

* Mesa 1: o cliente vai fazer o pedido de uma pizza
    - Eveneto Lupin pega o pedido e leva para o Chef
    - Volta com gosto de gás para a próxima mesa
* Mesa 2: o cliente faz o pedido de uma salada
    - Eveneto Lupin já pegou o pedido e levou para o Chef
* O Chef tocou um sininho avisando que o pedido da mesa 1 já ficou pronto e Eveneto Lupin corre para pegar e fazer a entrega do pedido
```
🏃‍♂️ O segredo de Eveneto é que ele sabe trabalhar de maneira assincrona, fazendo mais de 1 evento de cada vez e não tem nada que o bloqueie. Ele é muito solicitado efaz seu trabalho muito bem feito
```

## Decifrando...
* Tio Apache = Apache
* Noderson = Node
* Cliente = Usuário
* Pedido = Request
* Garçon = Thread
* Cozinha = Servidor
* Chef = Banco de Dados
* Eveneto Lupin = Event Loop

```
O Node é single-threaded(só usa uma thread), non-blocking (sem bloqueio) e asynchronous
```

## Avançando no entendimento e funcionamento

![Imagem Sintexe do funcionamento do Node.JS](https://camo.githubusercontent.com/3f07eb071b200684bded39796d5572e85b6771460a0f8678f60d687243431c51/68747470733a2f2f6861636b616461792e636f6d2f77702d636f6e74656e742f75706c6f6164732f323031382f30382f6e6f6a732d73797374656d2d6469616772616d2d62792d62757379726963682e6a70673f773d383030)

* Execute a seguinte linha de código no node, com e sem o `setTimeout` para entender mais sobre o funcionamento do NodeJS
```js
function c() {
    setTimeout(() => {console.log('c')}, 1000)
    return
}

function b() {
    console.log('b')
    return c()
}

function a() {
    console.log('a')
    b()
    return
}

a()

```
