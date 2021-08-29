import React from "react";
import "./App.css";

function HeaderComponent(props) {
     /*Responsividade do menu*/
    const btnIcon = document.querySelector("header i");
    const menu = document.querySelector("ul.menu");

    btnIcon.addEventListener("click", ()=> {
    console.log("OIII");
    btnIcon.classList.toggle("show");
    menu.classList.toggle("show");
    });

    return (
        
        <header>
            <h1 className="title">{props.name}</h1>
            <i className="fas fa-bars"></i>
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