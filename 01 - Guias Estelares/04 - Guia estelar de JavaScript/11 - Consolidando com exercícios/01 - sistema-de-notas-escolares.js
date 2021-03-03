/* ### Transformar notas escolares

Crie um algoritmo que transforme as notas do sistema numérico para sistema de notas em caracteres tipo A B C

* de 90 para cima -   A
* entre 80 e 89   -   B
* entre 70 e 79   -   C
* entre 60 e 69   -   D
* menor que 60    -   E

*/

function scoreSchool(score) {

    let scoreA = score >= 90
    let scoreB = score >=80 && score <= 89
    let scoreC = score >=70 && score <= 79
    let scoreD = score >=60 && score <= 69
    let scoreE = score < 60 && score >= 0

    let scoreFinal 

    if(scoreA) {
        scoreFinal = 'A'
    } else if(scoreB) {
        scoreFinal = 'B'
    } else if(scoreC) {
        scoreFinal = 'C'
    } else if(scoreD) {
        scoreFinal = 'D'
    } else if(scoreE) {
        scoreFinal = 'E'
    } else {
        scoreFinal = 'Nota inválida'
    }

    return scoreFinal

}

console.log(scoreSchool(90))
console.log(scoreSchool(84))
console.log(scoreSchool(72))
console.log(scoreSchool(64))
console.log(scoreSchool(56))
console.log(scoreSchool(-10))
console.log(scoreSchool(12))
console.log(scoreSchool(-1))



