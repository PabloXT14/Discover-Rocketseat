import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem"

import '../styles/repositories.scss';


/* Dados de teste */
const repository = {
    name: 'unform',
    description: 'Form in React',
    link: 'https://github.com/unform/unform'
}

/*
API do Github (public):
    * api.github.com/users/pabloxt14 (retorna os dados de um usuario)
    * api.github.com/orgs/rocketseat (retorna os dados de uma organizacao/empresa)
    * api.github.com/users/pabloxt14/repos (retorna os repositorios publicos de um usuario)
*/


export function RepositoryList() {
    const [repositories, setRepositories] = useState([]);


    //Utilizando useEffect
    useEffect(() => {
        //buscando dados na api do github
        fetch('https://api.github.com/users/pabloxt14/repos')
            .then(response => response.json())
            .then(data => { setRepositories(data) });
    }, []);//[] => executa a funcao do useEffect só uma vez no inicio da aplicacao



    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                {repositories.map(repository => {
                    //quando usamos .map() em jsx, temos que retornar um atributo key dentro do(s) elemento(s) do return (pelo menos no primeiro item) 
                    return <RepositoryItem key={repository.name} repository={repository} />
                })}

            </ul>
        </section>
    );
}