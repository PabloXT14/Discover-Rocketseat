const Modal = {
    open(){
        //Abrir modal
        //Adicionar a classe active ao modal-overlay
        document.querySelector('.modal-overlay').classList.add('active');
    },
    close(){
        // Fechar o modal
        // Remover a class active do modal-overlay
        document.querySelector('.modal-overlay').classList.remove('active');
    }
}


const transactions = [
    {
        id: 1,
        description: 'Luz',
        amount: -50000,
        date: '23/01/2021',
    },
    {
        id: 2,
        description: 'Website',
        amount: 500000,
        date: '23/01/2021',
    },
    {
        id: 3,
        description: 'Internet',
        amount: -20000,
        date: '23/01/2021',
    },
]


/*
    Eu preciso somar as entradas depois, somar as saídas e
    remover das entradas o valor das saídas, assim eu terei o
    total
*/

const Transaction = {
    all: transactions,

    add(transaction) {
        Transaction.all.push(transaction)

        App.reload()
    },

    incomes() { // somar as entradas
        let income = 0
        // pegar todas as transacoes
        // para cada transacao
        Transaction.all.forEach(transaction => {
            // se ela for maior que zero
            if(transaction.amount > 0){
                // somar a uma variavel e retornar a variavel
                income += transaction.amount;
            }
        })
        return income
    },

    expenses() { // somar as saídas
        let expense = 0
        // pegar todas as transações
        // para cada transação
        Transaction.all.forEach(transaction => {
            // se ela for menor que zero
            if(transaction.amount < 0){
                // somar a uma variavel e retornar a variavel
                expense += transaction.amount;
            }
        })
        return expense
    },

    total() {
        // entradas - saidas
        return Transaction.incomes() + Transaction.expenses()
    }
}

/* Substituir os dados do HTML com os dados do JS */ 

const DOM = {
    transactionsContainer: document.querySelector('#data-table tbody'),

    addTransaction(transaction, index) {
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction(transaction)

        DOM.transactionsContainer.appendChild(tr)
    },

    innerHTMLTransaction(transaction) {
        const CSSclasses = transaction.amount > 0 ? "income" : "expense"

        const amount = Utils.formatCurrency(transaction.amount);

        const html = `
        <tr>
            <td class="description">${transaction.description}</td>
            <td class="${CSSclasses}">${amount}</td>
            <td class="date">${transaction.date}</td>
            <td>
                <img src="./assets/minus.svg" alt="Remover transação">
            </td>
        </tr>
        `
        return html;
    },

    updateBalance() {
        document.getElementById('incomeDisplay').innerHTML = Utils.formatCurrency(Transaction.incomes())

        document.getElementById('expenseDisplay').innerHTML = Utils.formatCurrency(Transaction.expenses())

        document.getElementById('totalDisplay').innerHTML = Utils.formatCurrency(Transaction.total())
    },

    clearTransactions() {
        DOM.transactionsContainer.innerHTML = ""
    }
}

const Utils = {
    formatCurrency(value) {
        const signal = Number(value) < 0 ? "-" : ""

        value = String(value).replace(/\D/g, "")

        value = Number(value) / 100

        value = value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        })

        return signal + value
    }
}


const App = {
    init() {
        Transaction.all.forEach(transaction => {
            DOM.addTransaction(transaction)
        })
        
        DOM.updateBalance()
    },
    reload() {
        DOM.clearTransactions()
        App.init()
    }
}


App.init()

Transaction.add({
    id: 5,
    description: 'Água',
    amount: -120,
    date: '23/01/2021'
})



