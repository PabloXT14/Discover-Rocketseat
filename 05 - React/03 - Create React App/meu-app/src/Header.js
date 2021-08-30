import React from "react";
import "./App.css";//não precisa importar aqui pois o App.js já importa o arquivo App.css nele
import Menu from "./Menu";

function HeaderComponent(props) {

    return (
        <header>
            <h1 className="title">{props.name}</h1>
            <i className="fas fa-bars"></i>
            <Menu links={props.links}></Menu>
        </header>
    );
}


export default HeaderComponent;