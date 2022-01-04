/* Manipulando Arrays */

let techs = ["html", "css", "js"]

// Adicionar um item no fim
techs.push('node js');
// Adicionar no começo
techs.unshift('react');
// Remover do fim 
techs.pop();
// Remover do início
techs.shift();
// Pegar somente alguns elementos do array
/*
    - O método slice() retorna uma cópia de parte de um array a partir de um subarray criado entre as posições início e fim (fim não é necessário) de um array original. O Array original não é modificado.

        - início (Optional) : Índice baseado em zero no qual se inicia a extração.
        - fim (Optional) : Índice baseado em zero o qual é o final da extração. slice extrai até, não incluindo, fim.
        * Ex: slice(1,4) extrai do segundo até o quarto elemento (elementos de índice 1, 2 e 3).
*/
// console.log(techs.slice(1, 3));// extrai css e js


// Remover 1 ou mais items em qualquer posição do array
/*
    splice("índice do início da remoção", "quantos itens remover a partir do índice indicado ");
*/
// techs.splice(1, 1);

// Encontrar a posição de um elemento no array
// * Obs: quando o array não possui um elemento procurado, o indexOf retorna -1
let index = techs.indexOf('css');
// console.log(index);
// techs.splice(index, 1);



console.log(techs);