import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';


/* ===== Tipagens ===== */
interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

// interface TransactionInput {
//     title: string;
//     amount: number;
//     type: string;
//     category: string;
// }

//type TransactionInput = Pick<Transaction, 'title' | 'amount' | 'type' | 'category'>;// cria uma tipagem baseada em outra tipagem, escolhem os campos que serão copiados

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;// cria uma tipagem baseada em outra tipagem, mas omitindo alguns campos


interface TransactionsProviderProps {
    children: ReactNode;//setando que o componente com essa tipagem poderá ter como filho qualquer tipo de conteúdo válido no React (string, tag html, ...)
}

interface TransactionsContextData {
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => Promise<void>;
}


const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData // forçando tipagem no objeto vazio para não dar bug
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    // Buscar dados na API fake do MirageJS
    useEffect(() => {
        // Utilizando axios para realizar as requisições http
        api.get('/transactions')
            .then(response => setTransactions(response.data.transactions))
    }, []);

    /* Função para criar nova transação (async para esperar inserção antes de continuar o fluxo da aplicação) */
    async function createTransaction(transactionInput: TransactionInput) {

        // inserindo dados no back-end fake
        const response = await api.post('/transactions', {
            ...transactionInput,
            createdAt: new Date(),
        });
        const { transaction } = response.data;// pegando dado do response do axios

        // inserindo nova transação no state através da imutabilidade
        setTransactions([
            ...transactions,
            transaction
        ]);
    }


    return (
        /* Colocando mais dados dentro do Context */
        <TransactionsContext.Provider value={{ transactions, createTransaction }}>
            {children}
        </TransactionsContext.Provider>
    );
}

/* CRIANDO NOSSO PRÓPRIO HOOK */
export function useTransactions() {
    const context = useContext(TransactionsContext);

    return context;
}
