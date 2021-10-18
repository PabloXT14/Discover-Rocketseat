import { RepositoryList } from './components/RepositoryList';
import './styles/global.css';
import './styles/sass-style.scss';


export function App() {

    // Teste de Erro (Source Maps)
    //throw new Error('Eita Giovana, o forninho caiu!');


    return (
        <RepositoryList/>
    );
}