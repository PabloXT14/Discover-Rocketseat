import React from "react";
import "./App.css";

function HeaderComponent(props) {
    return (
        <header>
        <h1 className="title">{props.name}</h1>
        <ul className="menu">
            
            <li>{props.links[0]}</li>
            <li>{props.links[1]}</li>
            <li>{props.links[2]}</li>
            <li>{props.links[3]}</li> 
            
        </ul>
    </header>
    );
}

export default HeaderComponent;