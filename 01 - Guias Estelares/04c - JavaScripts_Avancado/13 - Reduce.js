/* ===== Reduce JS =====
- Definição/Uso
    * O método reduce() executa uma função de redução para cada elemento de um array.
    * reduce() retorna um único valor cujo o acumulador de função resultar.
    * reduce() não executa uma função para array sem elementos.
    * reduce() não muda o array original
    * RESUMINDO: O método reduce() executa uma função reducer (fornecida por você) para cada elemento do array, resultando num único valor de retorno

- Sintaxe:
array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
    * total/acumulador(obrigatório): o <initialValue>, ou um valor retornado pela função redutora.
    * currentValue(obrigatório): o valor do elemento atual do array
    * currentIndex(opcional): o index do elemento atual do array
    * arr(opcional): objeto/copia do array ao qual o elemento atual pertence
    * initialValue(opcional): valor para ser passado para a função redutora como valor inicial para o <total>

- Exemplo/Demonstração:
    const numbers = [15.5, 2.3, 1.1, 4.7];

    function getSum(total, num) {
        return total + Math.round(num);
    }

    console.log(numbers.reduce(getSum, 0)); // returned 21

- NOTE: Se o <valorInicial> não tiver sido passado como argumento, então reduce() executará o callback da função começando a partir do índice 1 (index 1), pulando o primeiro índice (index 0). Se o <valorInicial> for passado como argumento, a função irá começar no index 0.

- Veja mais sobre reduce() e outras function top order em: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
*/

function createAlumn(name, age) {
    return { name, age }
}

let alunos = [
    createAlumn('João', 20),
    createAlumn('Maria', 45),
    createAlumn('Pedro', 20),
    createAlumn('Brenda', 35)
]

function totalAge(acumulador, currentAlumn) {
    return acumulador + currentAlumn.age;
}

function fullNames(acumulador, currentAlumn) {
    return acumulador + " " + currentAlumn.name;
}


console.log(alunos.reduce(totalAge, 0))
console.log(alunos.reduce(fullNames, "Alunos da turma:"))


//Other exemplo
let numbers = [1, 2, 3, 4, 5]
console.log(numbers.reduce((acumulador, currentValue)=> {
    return acumulador + currentValue
}))