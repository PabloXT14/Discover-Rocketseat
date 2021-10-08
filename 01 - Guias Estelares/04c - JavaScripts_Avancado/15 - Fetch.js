/* ===== Fetch API (fetch:buscar) =====
- Definição:
    * A API Fetch fornece uma interface JavaScript para acessar e manipular partes do pipeline HTTP(o url que aparece na psrte de cima ao acessar um site), tais como os pedidos e respostas. Ela também fornece o método global fetch() que fornece uma maneira fácil e lógica para buscar recursos de forma assíncrona através da rede.

        * API Note: API é qualquer interface entre 2 sistemas(geralmente Front-End e Back-End).
    
    * RESUMINDO: o método fetch() nos permite acessar dados de fora da nossa página Web através de uma requisição HTTP, trazendo dados enviados por alguma API externa via URL, ou seja, nos possibilitando acessar dados de algum Back-End.
    * O fetch() retorna uma Promise, ou seja, podemos acessar os dados enviados por URL através de um .then()
    * A Promise retornada do fetch() não rejeitará o status do erro HTTP, mesmo que a resposta seja um HTTP 404 ou 500. Em vez disso, ela irá resolver normalmente (com o status ok definido como falso), e só irá rejeitar se houver falha na rede ou se algo impedir a requisição de ser completada
- Sintaxe(Fazendo as requisições Fetch):
    let url = "url da API"

    fetch(url)
    .then((resolve)=> {
        //.json(): método que converte um resolve de uma Promise que está em formato JSON para um <objeto> JavaScript, mas ele retorna em formato de Promise, então temos que pegar o corpo/body do JSON enviado em outro .then() 

        return resolve.json();
    })
    .then((data)=> {
        // data: já está no formato de <objeto> JS
        let number = data.algumValor;

        console.log(number)
    });

- Veja mais sobre fetch() em: https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch


*/
let from = "EUR"
// let from = "USD"
let to = "BRL"
let amount = 1;

let url = ` https://economia.awesomeapi.com.br/last/${from}-${to}`
// let url = " https://economia.awesomeapi.com.br/last/USD-BRL" // url padrão da API


function converter() {
    fetch(url)
    .then((response)=> { 
        //.json(): método que converte um resolve de uma Promise que está em formato JSON para um <objeto> JavaScript 
        return response.json();
    })
    .then((data)=> {
        // acessando taxa de conversão do objeto data, e ajustando em formato padrão

        let rate = parseFloat(data[from+to].bid).toFixed(2);
        let resultado = amount * rate;

        console.log(`${amount} ${from} = ${resultado} ${to}`)
    })
    .catch((error)=> {
        console.log("Aconteceu algum erro: ")
        console.log(error)
    })
}


//Utilizando async e await em vez de .then()
// async function converter() {
//     try { 
//         let response = await fetch(url);
//         let data = await response.json();

//         let rate = parseFloat(data[from+to].bid).toFixed(2);
//         let resultado = amount * rate;

//         console.log(`${amount} ${from} = ${resultado} ${to}`)
//     } catch(err) {
//         console.log(err)
//     }

// }


// obs: você pode colocar essa função para executar em um botão de um formulário, mais atenção, lembre-se se dar preventDefault() para previnir os comportamento padrão do formulário de atualizar a página.
converter();