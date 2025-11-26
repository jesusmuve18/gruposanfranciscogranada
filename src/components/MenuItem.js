import React, { useState } from "react";
import '../styles/MenuItem.css'

export const MenuItem = (props) => {

    const select = (item) => {
        props.setSelected(item.link)
    }

    const selected = () => {
        return (props.selected === props.link)
    }

    const [open, setOpen] = useState(false);

    const hasSubItems = props.subItems && props.subItems.length > 0;

    const handleClick = () => {
        if (hasSubItems) {
            setOpen(!open);
            select(props);
        } else {
            select(props);
        }
    };

    return (
        <div className={`menu-item ${selected() ? "selected" : ""}`} onClick={handleClick}>
            {props.name}
            {hasSubItems && open && (
                <div className={`submenu ${open ? "open" : ""}`}>
                    {props.subItems.map((sub) => (
                        <div key={sub.link} className="submenu-item" onClick={() => select(sub)}>
                            {sub.name}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}