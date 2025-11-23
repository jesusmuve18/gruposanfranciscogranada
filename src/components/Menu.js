import React from "react";
import '../styles/Menu.css'
import { Logo } from "./Logo";
import { MenuItem } from "./MenuItem"
import FadeItem from "./FadeItem";


import imagenApostoles from '../img/apostoles.jpg'

export const Menu = (props) => {
    return (
        <div className="Menu">
            <img src={imagenApostoles} alt="imagenApostoles" className={`menu-img ${props.selected === "pagina-principal" ? "tall" : "short"}`}/>

            <div className="overlay"></div>

            <div className="content">
                <div className="cabecera">
                    <Logo/>
                    <div className="menu-items">
                        <MenuItem name={"Inicio"} link={"pagina-principal"} setSelected={props.setSelected} selected={props.selected}/>
                        <MenuItem name={"La casa"} link={"la-casa"} setSelected={props.setSelected} selected={props.selected}/>
                        <MenuItem name={"Ministerios"} link={"ministerios"} setSelected={props.setSelected} selected={props.selected}/>
                        <MenuItem name={"Contacto"} link={"contacto"} setSelected={props.setSelected} selected={props.selected}/>
                    </div>
                </div>
                {(props.selected === "pagina-principal") &&
                    <FadeItem className="mensaje">
                        <div className="cita">"Venid a mí los que estáis cansados y agobiados, y yo os aliviaré"</div>
                        <div className="referencia">Mateo 11:28-30</div>
                    </FadeItem>
                }
            </div>
        </div>
    );
}