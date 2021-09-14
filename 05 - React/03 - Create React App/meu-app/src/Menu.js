import React from "react";


function MenuComponent(props) {

    const listLinks = props.links.map((link,index) => <li key={index}>{link}</li>);

    return (
    <ul className="menu">    
        {listLinks}    
    </ul>
    );
}

export default MenuComponent;