import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./style";

/* ===== Tipagens ===== */
interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}


export function TransationsTable() {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    // Buscar dados na API fake do MirageJS
    useEffect(() => {
        // fetch("http://localhost:3000/api/transactions")
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log(data)
        //     })
        api.get('/transactions')
            .then(response => setTransactions(response.data.transactions))
    }, []);

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    {transactions.map(transaction => {
                        return (
                            <tr key={transaction.id}>
                                <td>{transaction.title}</td>
                                <td className={transaction.type}>
                                    {new Intl.NumberFormat('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL',
                                    }).format(transaction.amount)}
                                </td>
                                <td>{transaction.category}</td>
                                <td>
                                    {new Intl.DateTimeFormat('pt-BR').format(
                                        new Date(transaction.createdAt)
                                    )}
                                </td>
                            </tr>
                        );
                    })}

                </tbody>
            </table>
        </Container>
    );
}