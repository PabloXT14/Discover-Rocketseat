/* ===== Async & Await =====
- Definição: 
    * "async e await tornam mais fácil de escrever uma Promise"
    * async faz uma função retornar uma Promise
    * await faz uma função esperar por uma Promise
- Async Sintaxe:
    * A palavra-chave <async> antes de uma função faz com que a função retorne uma Promise:
        async function myFunction() {
            return "Hello";
        }
        * É o mesmo em:
        async function myFunction() {
            return Promise.resolve("Hello");
        }
    * Agora veja como utilizar a Promise retornada pelo <async>:
        async function myFunction() {
            return "Hello";
        }
        myFunction().then(
            function(value) {myDisplayer(value);},
            function(error) {myDisplayer(error);}
        );
- Await Sintaxe: 
    * A palavra-chave <await> antes de uma função faz com que a função espere por uma promise:
        let value = await promise;
    * A expressão <await> faz a execução de uma função <async> pausar, para esperar pelo retorno da Promise.
    * A palavra-chave <await> pode apenas ser usada dentro de uma função <async>:
    * Ex. de <async> e <await> com setTimeout():
        function resolveAfter2Seconds(x) {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve(x);
                }, 2000);
            });
        }
    
        async function f1() {
            var x = await resolveAfter2Seconds(10);
            console.log(x); // 10
        }
        f1();
- Garantia/Benefícios de usar <async> e <await>:
    * Com a utlização do <async> e <await> você economiza a utlização de uma cadeia/encadeamento enorme de .then em uma função que simplismente retorna uma promise. Assim, os await cumprem a função de espera do .then.
*/

function resolveAfter2Seconds(x) {
    return new Promise(resolve => {
        setTimeout(()=> { 
            resolve(x) 
        }, 2000)
    });
}

async function f1() {
    let x = await resolveAfter2Seconds(7);
    console.log(x);
}

//f1();





/* ===== Exercício Async e Await =====
- Crie uma função que após 5 segundos, dobre o resultado do número passado como parâmetro. Essa função deverá retornar uma promise
*/

function dobraEm5Segundos(x) {
    return new Promise((response, reject) => {
        setTimeout(()=> {
            response(x += x)
            console.log(x)
        }, 5000)

        reject("Ocorreu um erro!!!")
    })
}

/*
- Crie uma função assíncrona que irá receber um parâmetro x. Crie três variáveis: a, b e c dentro do corpo da função. Cada uma dessas variáveis receberá um await da função do passo anterior. Você deve passar como parâmetros dessa função os número 10, 20 e 30, respectivamente
*/

async function addAsync(x) {
    console.log(x)

    //Tranto algum erro que ocorrer na Promise do await
    try  {
        let a = await dobraEm5Segundos(10)
        let b = await dobraEm5Segundos(20)
        let c = await dobraEm5Segundos(30)
        //Outro teste intereçante
        // let a = await dobraEm5Segundos(x)
        // let b = await dobraEm5Segundos(a)
        // let c = await dobraEm5Segundos(b)
    } catch(err) {
        console.log(err)
    }
    

    

    return x+a+b+c
}

addAsync(5)
.then((response)=> {
    console.log(response);
})
// .catch((err)=> {
//     console.log(`Ocorreu o erro: ${err}`)
// })


/* ===== Sem usar async e await ===== */
// let total = 0
// dobraEm5Segundos(10)
// .then((resp)=> {
//     total += resp;
//     return dobraEm5Segundos(20)
// })
// .then((resp)=> {
//     total += resp;
//     return dobraEm5Segundos(30)
// })
// .then((resp)=> {
//     total += resp;
//     console.log(total);
// })