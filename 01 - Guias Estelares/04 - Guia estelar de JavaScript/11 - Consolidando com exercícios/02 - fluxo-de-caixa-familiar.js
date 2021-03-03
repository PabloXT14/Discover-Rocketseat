/* ### Sistema de gastos familiar

- Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: []
    * despesas: []

- Agora, crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a família está com saldo positivo ou negativo, seguido do valor do saldo
*/

let spending = {
    incomes: [100, 100, 100, 100],
    expenses: [100, 100, 100, 120],
}

function sum(array) {
    let total = 0

    for(let value of array){
        total += value
    }

    return total
}

function balanceCalculate() {

    // Cálculo de entradas/receita
    const totalIncome = sum(spending.incomes);
    // Cálculo de saídas/despesas
    const totalExpense = sum(spending.expenses);
    
    const total = totalIncome - totalExpense

    const itsOk = total >= 0 // verificando se saldo é maior que zero

    // Calculando texto e signal da mensagem
    let balanceText = "negativo"
    let signal = '-'

    if(itsOk) {
        balanceText = "positivo"
        signal = ''
    }

    console.log(`Seu saldo é ${balanceText}: ${signal}R$ ${total.toFixed(2).replace("-","")}`)
}

balanceCalculate();






