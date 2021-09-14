/* O QUE É O JSX
    - É chamada JSX e é uma extensão de sintaxe para JavaScript. Recomendamos usar JSX com o React para descrever como a UI deveria parecer. JSX pode lembrar uma linguagem de template(HTML)mas não é HTML, e vem com todo o poder do JavaScript.
    - Basicamente o JSX é uma funcionalidade da "Biblioteca BABEL", esta pega o código HTML que enviamos como elemento do ReactDOM.render(), e converte da linguagem HTML para a linguagem React.
    (dica: acesee babeljs.io para entender mais)
*/

const domContainer = document.querySelector("#root");

const element = <div>
    <h1>Título da Página</h1>
    <h2>Subtítulo da página</h2>
    <div className="btn">Button</div>
</div>

const btn = <div>
    <button>Click Me</button>
</div>

ReactDOM.render(element, domContainer);

/* Outro exemplo */
const page = ()=> {
    return <div>
        <h1>Título da Página</h1>
        <h2>Subtítulo da página</h2>
        <div className="btn">Button</div>
    </div>
}

ReactDOM.render(page(), domContainer);
