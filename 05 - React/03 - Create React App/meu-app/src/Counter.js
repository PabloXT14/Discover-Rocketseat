import React, { useEffect, useState } from 'react';


/* ========== Componente em Class ========== */
//  class CounterComponent extends React.Component {

//      constructor(props) {
//          super(props);
//          /* ========== State(Estado) ==========
//          - State: elemento do React que serve para renderizar novamente a tela todas vez que precisar mudar o estado de uma elemento da página
//          - Sendo assim, toda vez que precisarmos mudar/alterar um elemento na tela teremos que alterar o <state> através do React
//          */
//          this.state = {count: this.props.count}

//          //Fazendo com que o <this> do método add() seja o mesmo <this> da classe.
//          this.add = this.add.bind(this);
//          this.less = this.less.bind(this);
//      }

//        /* ===== Método de Ciclo de Vida ===== */ 
//      shouldComponentUpdate() {
//      /*shouldComponentUpdate(): função React, que serve para determinar se o Component deve ou não atualizar a tela (com render) caso ocorra uma alteração de estado<state>
//          - return true: atualiza a tela
//          - return false: não atualiza a tela
//      */
//          return true;

//      }

//      componentDidMount() {
//      /*
//          O método componentDidMount() é executado apenas uma vez, após a saída do componente ter sido renderizada para o DOM (ou seja, é executado depois que a tela já foi renderizada pelo <render>). Este é um bom lugar para configurar um cronômetro ou setar o valor inicial de um elemento:
//      */
//          this.setState(JSON.parse(localStorage.getItem("state")))
//      }


//     componentDidUpdate() {
//      /*
//         O método componentDidUpdate() é utilizado para quando formos atualizar o valor de um elemento depois que a tela já foi carregada, ex: atualizar o valor do cronômetro
//      */
//     }


//      componentWillUnmount() {
//      /*
//          o método componentWillUnmount() é executado toda vez que um elemento vai ser excluido da tela, ou seja, toda vez que vc for excluir um elemento da tela utilize este método (ex: limpar um item de uma todo list, parar um cronômetro)
//      */
//  console.log("Counter foi excluido!")
//      }

//      add() {
//          //Alterando State: toda vez que for alterar o estado fora do construtor, é preciso utilizar o this.setState()

//          //Sintaxe que pode dar erro
//          //this.setState({count: this.state.count + 1})

//          //Sintaxe mais segura
//          this.setState((state)=> { return {count: state.count + 1}}, ()=> {
//              console.log(this.state)
//              localStorage.setItem("state", JSON.stringify(this.state))//armazenando valor do <state> no localStorage
//          })
//      }

//      less() {
//          this.setState((state)=> { return {count: state.count - 1}}, ()=> {
//              localStorage.setItem("state", JSON.stringify(this.state))
//          })
//      }

//      render() {
//          return (
//              <div className="counter">
//                  <h1>Counter <span>{this.state.count}</span></h1>
//                  <button onClick={this.add}>Add</button>
//                  <button onClick={this.less}>Less</button>
//              </div>
            
//          );
//      }
//  }



/* ========== Componente em Function ========== */
function CounterComponent(props) {
    /* ===== Utilizando State em Hook =====*/
    /*
    - Hook: é básicamente um variável global no React chamada <useState> que permite a alterações de estados dentro de uma função
    - <useState> retorna um par:
        * o valor do state atual e uma função que permite atualizá-lo.
    - Você pode chamar essa função a partir de um manipulador de evento ou de qualquer outro lugar.
    - É parecido com <this.setState> em uma classe, exceto que não mescla o antigo state com o novo.
    */


    const [count, setCount] = useState(props.count)//o "count" e o "setCount", pode ser o nome q vc quiser


    /* ===== Hooks Effect ===== */
    /*
    - o Hooks Effect vão funcionar para controlar o ciclo de vida de um component/elemento (semelhante aos métodos de ciclo de vida em uma classe) nas funções.
    - Para controlar o ciclo de vida do elemento com Hook Effect utiliza-se a variável global <useEffect>.
    - Sintaxe: useEffect(action, stateVerify):
        * action: ação/função que o useEffect vai realizar.
            OBS: utilize aqui um return() quando quiser que um component suma da tela.
        * stateVerify: estado/variável do estado que o useEffect vai verificar em tempo real para alterar o valor
            OBS: use [] para o useEffect verificar somento uma vez/setar o valor inicial de um state (igual ao componentDidMount), mas lembre-se de declarar antes o useEffect == componentDidUpdate .
    */

    //useEffect == componentDidMount (sentando valor inicial com useEffect)
    useEffect(()=> {
        setCount(JSON.parse(localStorage.getItem("count")))
    }, [])

    //useEffect == componentDidUpdate (setando/atualizando valor de um state)
    useEffect(()=>{
        localStorage.setItem("count", count);
    }, [count])

    //useEffect == componentWillUnmount (excluindo um elemento da tela)
    useEffect(()=> {
        //Este return só é executado quando o component <Counter> some da tela
        return ()=> {
            console.log("Contador Excluido!!!")
        }

    }, [])

    function add() {
        console.log("update value")
        setCount(count + 1)
    }

    function less() {
        console.log("update value")
        setCount(count - 1)
    }

    return(
        <div className="counter">
            <h1>Counter <span>{count}</span></h1>
            <button onClick={add}>Add</button>
            <button onClick={less}>Less</button>
        </div>
    );
}

export default CounterComponent;