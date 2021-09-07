import React from 'react';

class CounterComponent extends React.Component {

    constructor(props) {
        super(props);
        /* ========== State(Estado) ==========
        - State: elemento do React que serve para renderizar novamente a tela todas vez que precisar mudar o estado de uma elemento da página
        - Sendo assim, toda vez que precisarmos mudar/alterar um elemento na tela teremos que alterar o <state> através do React
        */
        this.state = {count: this.props.count}

        //Fazendo com que o <this> do método add() seja o mesmo <this> da classe.
        this.add = this.add.bind(this);
    }

    shouldComponentUpdate() {
    /*shouldComponentUpdate(): função React, que serve para determinar se o Component deve ou não atualizar a tela (com render) caso ocorra uma alteração de estado<state>
        - return true: atualiza a tela
        - return false: não atualiza a tela
    */
        return true;

    }

    componentDidMount() {
    /*
        O método componentDidMount() é executado após a saída do componente ter sido renderizada para o DOM (ou seja, é executado depois que a tela já foi renderizada pelo <render>). Este é um bom lugar para configurar um cronômetro:
    */
        this.setState(JSON.parse(localStorage.getItem("state")))
    }

    componentWillUnmount() {
    /*
        o método componentWillUnmount() é executado toda vez que um elemento vai ser excluido da tela, ou seja, toda vez que vc for excluir um elemento da tela utilize este método (ex: limpar um item de uma todo list, parar um cronômetro)
    */
    }

    add() {
        //Alterando State: toda vez que for alterar o estado fora do construtor, é preciso utilizar o this.setState()

        //Sintaxe que pode dar erro
        //this.setState({count: this.state.count + 1})

        //Sintaxe mais segura
        this.setState((state)=> { return {count: state.count + 1}}, ()=> {
            console.log(this.state)
            localStorage.setItem("state", JSON.stringify(this.state))//armazenando valor do <state> no localStorage
        })
    }

    render() {
        return (
            <div>
                <h1>Counter {this.state.count}</h1>
                <button onClick={this.add}>Add</button>
            </div>
            
        );
    }
}

export default CounterComponent;