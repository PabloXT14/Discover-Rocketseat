/* ===== Asynchronous JS =====
- Definição: 
    * funções executadas em paralelo com outras funções são chamdas de asíncronas
    * Bons exemplos são o setTimeout() e setInterval()

- Exemplo/Sixtaxe:
## setTimeout()
- O método setTimeout() chama uma função ou avalia uma expressão após um número especificado de milissegundos.
- Dica: 1000 ms = 1 segundo.
- Dica: a função é executada apenas uma vez. Se você precisar repetir a execução, use o método setInterval () .
- Dica: Use o método clearTimeout() para evitar que a função seja executada.
- ex: setTimeout(function(){ alert("Hello"); }, 3000);

## setInterval()
- O método setInterval() chama uma função ou avalia uma expressão em intervalos especificados (em milissegundos).
- O método setInterval() continuará chamando a função até que clearInterval() seja chamado ou a janela seja fechada.
- O valor de ID retornado por setInterval() é usado como o parâmetro para o método clearInterval().
- Dica: 1000 ms = 1 segundo.
- Dica: para executar uma função apenas uma vez, após um número especificado de milissegundos, use o método setTimeout().

## clearTimeout()
- O método clearTimeout() limpa um cronômetro definido com o método setTimeout() .
- O valor de ID retornado por setTimeout() é usado como o parâmetro para o método clearTimeout().
- Ex:
  var myVar;

  function myFunction() {
    myVar = setTimeout(function(){ alert("Hello"); }, 3000);
  }

  function myStopFunction() {
    clearTimeout(myVar);
  }
- Então, se a função ainda não foi executada, você poderá parar a execução chamando o método clearTimeout().


## clearInterval()
- O método clearInterval() limpa um cronômetro definido com o método setInterval() .
- O valor de ID retornado por setInterval() é usado como o parâmetro para o método clearInterval().
- Nota: Para poder usar o método clearInterval(), você deve usar uma variável ao criar o método de intervalo:
- Ex:
  var myVar = setInterval(myTimer, 1000);

  function myTimer() {
    var d = new Date();
    var t = d.toLocaleTimeString();
    document.getElementById("demo").innerHTML = t;
  }

  function myStopFunction() {
    clearInterval(myVar);
  }

*/

let counter = 0

let interval = setInterval(()=> console.log(counter++), 1000)

document.body.addEventListener("keydown", (event) => {
    let key = event.key
    let keyCode = event.keyCode;

    if(key == "Backspace") {
        clearInterval(interval);
        console.log("intervalo parado!")
    }
});