import React from "react";
import '../styles/MenuItem.css'

export const MenuItem = (props) => {

    const select = () => {
        props.setSelected(props.link)
    }

    const selected = () => {
        return (props.selected === props.link)
    }

    return (
        <div className="menu-item" onClick={() => select()}>
            <p>{props.name}</p>
            {selected()? <div className="bar-selected"></div> : ""}
        </div>
    );
}