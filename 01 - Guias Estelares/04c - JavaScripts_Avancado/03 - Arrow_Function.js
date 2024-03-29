/* ===== Arrow Function (Função Flexa) =====
- ATENÇÃO: arrow function não sofre hoisting (tem que chama-lá depois de sua criação)
- As funções de seta nos permitem escrever uma sintaxe de função mais curta:
    * Sem Arrow Function:
    hello = function() {
        return "Hello World!";
    }
    * Com Arrow Function:
    hello = () => {
        return "Hello World!";
    }
- Ela fica mais curta! Se a função tiver apenas uma instrução e a instrução retornar um valor, você pode remover os colchetes e a palavra-chave <return>:

    hello = () => "Hello World!";

* OBS: isso funciona apenas se a função tiver apenas uma instrução.

/ ===== Sobre o <this>/<bind> ===== /
- O manuseio de <this> também é diferente nas funções de seta em comparação com as funções regulares
- Em suma, com as funções de seta, não há vinculação de <this>
- Em funções regulares, a palavra-chave <this> representa o objeto que chamou a função, que pode ser a janela, o documento, um botão ou o que quer que seja.
- Com as funções de seta, a palavra-chave <this> sempre representa o objeto que definiu a função de seta (normalmente o window)
- Ex: 
let dobro = () => { console.log(this) }//<this> retorna o window
let dobro = function () { console.log(this) }//<this> retorna o objeto que chamou a função (em nosso caso o <numero>)

let numero = {
    x: 8,
    d: dobro
}

numero.d();

*/

let dobro = () => { console.log(this) }
//let dobro = function () { console.log(this) }

let numero = {
    x: 8,
    d: dobro
}

//numero.d();

function climbingLeaderboard(ranked, player) {

    let positionRanks = player.map((score) => {

        let actualRank = 0;

        for (let i = 0; i < ranked.length; i++) {

            //Check rank
            if (ranked[i - 1] !== ranked[i]) {
                actualRank += 1;
            }

            //Check points
            if (score >= ranked[i]) {
                break;
            }

        }

        //Caso a point do player seja menor que a ultima posicao, cria um novo rank
        return actualRank = score < ranked[ranked.length - 1] ? actualRank += 1 : actualRank;
    });

    return positionRanks;
}

console.log(climbingLeaderboard([100, 90, 90, 80, 75, 60], [50, 65, 77, 90, 102]));