/* ===== CallBack Function =====
- Definição: 
    * A <callback> é uma função passada como argumento de outra função.
    * Isso tecnicamente permite que uma função chame outra função
    * Uma função <callback> pode ser executada depois de outra função ter terminado.
- Exemplo/Sintaxe:
    * Usando uma <callback>, você pode chamar a função calculadora(myCalculator) com uma <callback>, e deixar a função calcuçadora rodar o <callback> depois do cálculo ter terminado:

    function myDisplayer(some) {
        document.getElementById("demo").innerHTML = some;
    }

    function myCalculator(num1, num2, myCallback) {
        let sum = num1 + num2;
        myCallback(sum);
    }

    myCalculator(5, 5, myDisplayer);//não precisa dos () para passar uma função como argumento

- Quando usar o CallBack:
    * O exemplo acima foi apenas utilizado para ensinar a sintaxe da <callback>
    * Onde as <callback> realmente brilham são em funções asíncronas, onde uma função tem que esperar por outra função (como esperar por arquivo carregar)
*/

function displayResult(result) {
    console.log("Resultado: " + result);
}

function myCalculator(n1, n2, callback) {
    let sum = n1 + n2;
    callback(sum)
}

myCalculator(5, 5, displayResult);
