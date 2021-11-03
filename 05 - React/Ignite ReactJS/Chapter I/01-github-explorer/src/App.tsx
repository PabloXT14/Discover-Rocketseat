import { Counter } from './components/Counter';
import { RepositoryList } from './components/RepositoryList';
import './styles/global.css';


export function App() {

    // Teste de Erro (Source Maps)
    //throw new Error('Eita Giovana, o forninho caiu!');

    /*
        <></>: FRAGMENTE, já que um componente só pode enviar uma <div/conjunto> no return(), o fragmente nos permite juntar esses elementos/outros componentes sem colocá-los dentro de uma div
    */


    return (
        <>
            <RepositoryList />
            {/* 
                <Counter /> => utilizado para estudo de <state>
             */}
        </>
    );
}