import React from "react";
import "./App.css";

function Banana(props) {
    return (
        <header>
        <h1 className="title">{props.name}</h1>
        <ul className="menu">
            
            <li>{props.links[0]}</li>
            <li>{props.links[1]}</li>
            <li>Services</li>
            <li>Skills</li>
            <li>Contact</li> 
            

        </ul>
    </header>
    );
}

export default Banana;