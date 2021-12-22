import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from './services/api';


/* ===== Tipagens ===== */
interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

interface TransactionsProviderProps {
    children: ReactNode;//setando que o componente com essa tipagem poderá ter como filho qualquer tipo de conteúdo válido no React (string, tag html, ...)
}



export const TransactionsContext = createContext<Transaction[]>([]);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    // Buscar dados na API fake do MirageJS
    useEffect(() => {
        // Utilizando axios para realizar as requisições http
        api.get('/transactions')
            .then(response => setTransactions(response.data.transactions))
    }, []);

    return (
        <TransactionsContext.Provider value={transactions}>
            {children}
        </TransactionsContext.Provider>
    );
}

