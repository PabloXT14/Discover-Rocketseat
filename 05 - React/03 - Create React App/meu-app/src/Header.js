import React from "react";
import "./App.css";//não precisa importar aqui pois o App.js já importa o arquivo App.css nele
import Menu from "./Menu";


//Maneira mais atual de criar Components no React (com Functions)
function HeaderComponent(props) {


    return (
        <header>
            <h1 className="title">{props.name}</h1>
            <i className="fas fa-bars"></i>
            <Menu links={props.links}></Menu>
        </header>
        
    );
}


/*Maneira Antiga de criar Components no React (com class)*/
// class HeaderComponent extends React.Component {
//     //acessamos as <props> pelo construtor da classe
//     constructor(props) {
//         super(props);//enviando as <props> para a classe pai, para poderem ser renderizadas depois
//     }


//     //método para renderizar os elementos da classe
//     render() {
//         return (
//             <header>
//                 {/* precisa usar o this para chamar o <props> */}
//                 <h1>{this.props.name}</h1>
//                 <Menu links={this.props.links}></Menu>
//             </header>
//         )
//     }
         
// }



export default HeaderComponent;