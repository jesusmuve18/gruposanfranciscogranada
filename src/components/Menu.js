import React, { useEffect, useState } from "react";
import '../styles/Menu.css'
import { Logo } from "./Logo";
import { MenuItem } from "./MenuItem"
import FadeItem from "./FadeItem";


import imagenApostoles from '../img/apostoles.jpg'

export const Menu = (props) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isTall = props.selected === "pagina-principal" && !isScrolled;

    return (
        <div className="Menu">
            <img src={imagenApostoles} alt="imagenApostoles" className={`menu-img ${isTall ? "tall" : "short"}`}/>

            <div className="overlay"></div>

            <div className="content">
                <div className="cabecera">
                    <Logo/>
                    <div className="menu-items">
                        <MenuItem name={"Inicio"} link={"pagina-principal"} setSelected={props.setSelected} selected={props.selected}/>
                        <MenuItem name={"La casa"} link={"la-casa"} setSelected={props.setSelected} selected={props.selected}/>
                        <MenuItem name={"Ministerios"} link={"ministerios"} setSelected={props.setSelected} selected={props.selected} subItems={[
                            { name: "Oración", link: "ministerio-oracion" },
                            { name: "Música", link: "ministerio-musica" },
                            { name: "Liturgia", link: "ministerio-liturgia" }
                        ]}/>
                        <MenuItem name={"Contacto"} link={"contacto"} setSelected={props.setSelected} selected={props.selected}/>
                    </div>
                </div>
                {(props.selected === "pagina-principal" && !isScrolled) &&
                    <FadeItem className="mensaje">
                        <div className="cita">"Venid a mí los que estáis cansados y agobiados, y yo os aliviaré"</div>
                        <div className="referencia">Mateo 11:28-30</div>
                    </FadeItem>
                }
            </div>
        </div>
    );
}