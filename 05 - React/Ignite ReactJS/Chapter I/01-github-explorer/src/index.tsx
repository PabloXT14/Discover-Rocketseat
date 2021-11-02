// import React from "react";
import { render } from "react-dom";
import { App } from './App';

/* DEMONSTRAÇÃO */
// const user = {
//     name: 'Pablo'
// }

// console.log(user.address?.street);//nulled colesing operator (nova funcionalidade do ESC6, evita um erro caso alguma propriedade de um objeto não exista)


/* CRIANDO COMPONENTE */
function Wrapper() {
    return <h1>Hellow World!!!</h1>;
}

render(<App />, document.getElementById('root'));