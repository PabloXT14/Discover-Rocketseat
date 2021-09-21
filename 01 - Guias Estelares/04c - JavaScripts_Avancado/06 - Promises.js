/* ===== JS Promises =====
- Definição:
    * "Produzir código" é um código que pode levar algum tempo
    * "Código de consumo" é o código que deve esperar pelo resultado
    * Uma <promise> é um objeto JavaScript que vincula a produção de código e o consumo de código
- Sintaxe da Promise:
    let myPromise = new Promise(function(myResolve, myReject) {
    // "Producing Code" (May take some time)

    myResolve(); // when successful
    myReject();  // when error
    });

    // "Consuming Code" (Must wait for a fulfilled Promise)
    myPromise.then(
    function(value) { // code if successful // },
    function(error) { // code if some error // }
    );
    */