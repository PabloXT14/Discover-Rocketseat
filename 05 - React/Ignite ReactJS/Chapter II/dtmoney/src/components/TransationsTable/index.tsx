import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./style";

/* ===== Tipagens ===== */
interface TransactionType {

}


export function TransationsTable() {

    // Buscar dados na API fake do MirageJS
    useEffect(() => {
        // fetch("http://localhost:3000/api/transactions")
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log(data)
        //     })
        api.get('/transactions')
            .then(response => { console.log(response.data) })
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
                    <tr>
                        <td>Desenvolvimento de Website</td>
                        <td className="deposit">R$ 12.000</td>
                        <td>Desenvolvimento</td>
                        <td>25/11/2021</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">- R$ 1.100</td>
                        <td>Casa</td>
                        <td>20/11/2021</td>
                    </tr>
                    <tr>
                        <td>Freelancer</td>
                        <td className="deposit">R$ 12.000</td>
                        <td>Desenvolvimento</td>
                        <td>24/11/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}