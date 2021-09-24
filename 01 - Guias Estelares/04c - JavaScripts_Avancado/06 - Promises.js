/* ===== JS Promises =====
- Definição:
    * "Produzir código" é um código que pode levar algum tempo
    * "Código de consumo" é o código que deve esperar pelo resultado
    * Promise é um objeto usado para processamento assíncrono. Um Promise (de "promessa") representa um valor que pode estar disponível agora, no futuro ou nunca
    * Resumindo: uma promise é basicamente um CallBack mais elabora.
    * 
- Sintaxe/Utilizando uma Promise:
    let myPromise = new Promise(function(myResolve, myReject) {
    // "Produzingo Código" (Pode levar algum tempo)

    myResolve(); // when successful (retorna valor do resultado)
    myReject();  // when error (retorna um objeto de erro)
    });

    // then: "Código de consumo" (o then executado se resolve() da promise for atendido)
    myPromise.then(
        function(value) { // code if successful // },
        function(error) { // code if some error // }
    ).catch( // executado quando reject() da promise for atendido, ou seja, quando der algum erro.
        function(error) { // code if some error // }
    );

    * Outra demonstração:
    const promise = doSomething();
    promise.then(successCallback, failureCallback);
    
    * OBS: o função de erro pode ser passada tanto como um segundo parâmetro do then() ou ser pega pelo catch(), vai de sua escolha

- Garantias da Promise:
    * Callbacks nunca serão chamados antes da conclusão da execução atual do loop de eventos do JavaScript. 
    * Callbacks adicionadas com .then mesmo depois do sucesso ou falha da operação assíncrona, serão chamadas, como acima.
    * Multiplos callbacks podem ser adicionados chamando-se .then várias vezes, para serem executados independentemente da ordem de inserção.
    * ATENÇÃO: Mas o benefício mais imediato das promises é o encadeamento.
      * Encadeamento: 
        Uma necessidade comum é executar duas ou mais operações assíncronas consecutivas, onde cada operação subsequente começa quando a operação anterior é bem sucedida, com o resultado do passo anterior. Nós conseguimos isso criando uma cadeia de promises. Veja a demonstração:
        doSomething()
        .then(result => doSomethingElse(result))
        .then(newResult => doThirdThing(newResult))
        .then(finalResult => {
            console.log(`Got the final result: ${finalResult}`);
        })
        .catch(failureCallback);

- Mais sobre como usar promises: 
    * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Using_promises
*/

let usuarios = ["Adriano", "Marcia", "Jose"]

function inserirUsuario(name) {
    let promise = new Promise(function (resolve, reject) {

        setTimeout(()=> {
            usuarios.push(name)
            //let erro = usuarios.indexOf(name) != -1
            let error = true;

            if(!error) {
                
                resolve(`${name} inserido!`);
            } else {
                reject({msg: "Algum erro ocorreu ao inserir o usuário!"});
            }
        }, 2000)
    })

    return promise;
}

function showUsers() {
    console.log(usuarios)
}

//1ª Opção
inserirUsuario("João")
.then((msg)=> {
    console.log(msg)
    showUsers();
})
.catch((error)=> {
    console.log(error.msg);
})

//2ª Opção
// inserirUsuario("João")
// .then(
//     (sucessfullCallback)=> {
//         console.log(sucessfullCallback)
//     },
//     (failureCallback)=> {
//         console.log(failureCallback)
//     }
// );

//3ª Opção
// inserirUsuario("João")
// .then((sucessfullCallback)=> {
//     console.log(sucessfullCallback)
// })
// .then(null, (failureCallback)=> {
//     console.log(failureCallback)
// });