# Event Module

É um mecanismo para
* [ ] Disparar eventos
* [ ] Ouvir eventos
* [ ] Fazer alguma ação quando ouvir o evento.
* [ ] É a base para muitos outros módulos como: http, stream, file system, etc...

* O `events` é um módulo nativo do NodeJS, que irá realizar as ações ditas acima


## O que vamos aprender?

* [ ] Utilizar os eventos
    - Extraia do módulo `events` a classe em forma de função `EventEmitter`, para realizar a emição de eventos, e salve-a em uma variável/objeto
    - Ex:
    ```js
    const { EventEmitter } = require('events')

    const ev  = new EventEmitter()
    ```
* [ ] Disparar eventos
    - Utilizando a variável/objeto da classe `EventEmitter`, acesse através do ponto a função `emit()`, e passe como parâmetro/argumento o evento a ser emitido
    - Ex:
    ```js
    ev.emit('saySomething')
    ```
* [ ] Ouvir eventos
    - Para ouvir/ver um evento emitido com o `emit()`, basta utilizar outra função chamada `on(NomeDoEvento, Função/Método)`, com os seguintes parâmetros já ditos, (*atenção*: execute a função `on()` antes da `emit()` de um determinado evento, para não dar erro/não funcionar)
    - Ex:
    ```js
    ev.on('saySomething', () => {
        console.log('Escutei o evento')
    })

    ev.emit('saySomething')

    ```
    - Obs: você pode passar mais um argumento no `emit()` que será um parâmetro da função executada no `on()`, veja:
    ```js
    ev.on('saySomething', (message) => {
        console.log('Eu ouvi você ', message)// return => Eu ouvi você Mayk
    })

    ev.emit('saySomething', "Mayk")
    ```
    - Para ouvir um evento uma unica vez, utilize a função `once()`, que é semelhante ao `on()`, no entanto, executa um determinado evento somente uma vez
    ```js
    ev.once('saySomething', (message) => {
        console.log('Eu ouvi você ', message)
        // return => Só retorna Mayk 
    }

    ev.emit('saySomething', "Mayk")
    ev.emit('saySomething', "Pablo")
    ```
* [ ] Execultar ações para determinados eventos
    - Isto é relizado pelo funçãoCallBack que é passada como parâmetro dentro das funções `on()` ou `once()`
* [ ] Entender como ele é a base para outros módulos