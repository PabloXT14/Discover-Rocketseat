/*
    * addEventListener(Ouvidor de eventos):
    - é uma função que irá receber dois parâmetros
    - addEventListener('tipo de evento','o que vai ser executado')
*/

const h1 = document.querySelector('h1')

// h1.addEventListener('click', print)
// h1.addEventListener('dblclick', print)
h1.addEventListener('mouseover', print)


function print() {
    console.log('Print')
}

/*
    * Outra maneira é utilizar o acesso a propriedade de evento de um elemento sem o addEventListener, no entanto, desse jeito um elemento só vai poder ter uma funcionalidade atribuida a ele.
    - a demonstração a seguir
*/
const h2 = document.querySelector('h2')

h2.onclick = print// este é sobrescrito/não aparece
h2.onclick = function() {
    console.log("Outro momento")
}


/*
    * Conclusão:
    - recomenda-se utilizar o addEventListener, pois com este consegue-se adicionar mais de uma ação a um mesmo evento.
*/
const h3 = document.querySelector('h3')
h3.addEventListener('click', print)
h3.addEventListener('click', function() {
    console.log('Outro print')
})

