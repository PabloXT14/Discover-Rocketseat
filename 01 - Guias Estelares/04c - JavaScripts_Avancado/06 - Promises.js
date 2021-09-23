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
        
    ).catch( // executado quando reject() da promise for atendido, ou seja, quando der algum erro.
        function(error) { // code if some error // }
    );

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

inserirUsuario("João")
    .then((msg)=> {
        console.log(msg)
        showUsers();
    })
    .catch((error)=> {
        console.log(error);
    })