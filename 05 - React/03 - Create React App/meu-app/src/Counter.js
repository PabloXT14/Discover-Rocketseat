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

    add() {
        //Alterando State: toda vez que for alterar o estado fora do construtor, é preciso utilizar o this.setState()

        //Sintaxe que pode dar erro
        //this.setState({count: this.state.count + 1})

        //Sintaxe mais segura
        this.setState((state)=> {
            return {count: state.count + 1}
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