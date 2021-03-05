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

/* Salvando dados no Local Storage do browser */
const Storage = {
    // Pegando dados no localStorage
    get() {
        // Convertendo string para o formato array
        return JSON.parse(localStorage.getItem("dev.finances: transactions")) || []
    },

    // Enviando os dados para o localStorage
    set(transactions) {
        // Parêmetros ("nome da chave", "valor(o localStorage sempre salva como string) ")
        localStorage.setItem("dev.finances: transactions", JSON.stringify(transactions))
        /*
            Semelhante a um objeto (o localStorage é um objeto):
            objeto {
                chave: valor
            }
        */
    }
}


/*
    Eu preciso somar as entradas depois, somar as saídas e
    remover das entradas o valor das saídas, assim eu terei o
    total
*/

const Transaction = {
    all: Storage.get(),
    
    /* Modo antigo se inserir dados na table
     [
        {
            description: 'Luz',
            amount: -50000,
            date: '23/01/2021',
        },
        {
            description: 'Website',
            amount: 500000,
            date: '23/01/2021',
        },
        {
            description: 'Internet',
            amount: -20000,
            date: '23/01/2021',
        },
    ]
    */

    add(transaction) {
        Transaction.all.push(transaction)

        App.reload()
    },

    remove(index) {
        Transaction.all.splice(index, 1)

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
        tr.innerHTML = DOM.innerHTMLTransaction(transaction, index)
        tr.dataset.index = index


        DOM.transactionsContainer.appendChild(tr)
    },

    innerHTMLTransaction(transaction, index) {
        const CSSclasses = transaction.amount > 0 ? "income" : "expense"

        const amount = Utils.formatCurrency(transaction.amount);

        const html = `
        <tr>
            <td class="description">${transaction.description}</td>
            <td class="${CSSclasses}">${amount}</td>
            <td class="date">${transaction.date}</td>
            <td>
                <img onclick="Transaction.remove(${index})" src="./assets/minus.svg" alt="Remover transação">
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
    },

    formatAmount(value) {
        value = Number(value) * 100 // formato correto para a array guardar 

        return value
    },

    formatDate(date) {
        const splitDate = date.split("-")

        return `${splitDate[2]}/${splitDate[1]}/${splitDate[0]}`
    },
}

/* Capturando dados do formulário */
const Form = {
    description: document.querySelector("input#description"),
    amount: document.querySelector("input#amount"),
    date: document.querySelector("input#date"),

    getValue() {
        return {
            description: Form.description.value,
            amount: Form.amount.value,
            date: Form.date.value,
        }
    },

    validateFields() {
        const { description, amount, date } = Form.getValue()

        // verificando se não esta vazio (o trim() remove todos os espaços em branco)
        if( description.trim() === "" ||
            amount.trim() === "" ||
            date.trim() === "" ) {
                throw new Error("Por favor, preencha todos os campos")
            }
    },

    formatValues() {
        let { description, amount, date } = Form.getValue()

        amount = Utils.formatAmount(amount)
        date = Utils.formatDate(date)

        return {
            description, 
            amount,
            date,
        }
    },

    clearFields() {
        Form.description.value = ""
        Form.amount.value = ""
        Form.date.value = ""
    },

    submit(event) {
        event.preventDefault()// para não aparecer os dados na url

        try {

            // verificar se todas as informações foram preenchidas
            Form.validateFields()

            // formatar os dados para salvar
            const transaction =  Form.formatValues()

            // salvar
            Transaction.add(transaction)

            // apagar os dados do formulário
            Form.clearFields()

            // modal fechar
            Modal.close()

            // Atualizar nossa aplicação (opicional pois ja foi feito reload antes ao adicionar a transação com Transaction.add())
            // App.reload()


        } catch(error) {
            alert(error.message)
        }
        
    }
}



const App = {
    // Incio da aplicação
    init() {
        Transaction.all.forEach((transaction, index) => {
            DOM.addTransaction(transaction, index)
        })
        
        DOM.updateBalance()

        Storage.set(Transaction.all) // Salvando dados no localStorage
    },

    // Recarregando a aplicação (para remover ou adicionar dados)
    reload() {
        DOM.clearTransactions()
        App.init()
    }
}

App.init()





