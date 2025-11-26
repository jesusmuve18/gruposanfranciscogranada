import { useContext, useEffect, useState } from "react";
import "../styles/Menu.css";
import { Logo } from "../../../lib/components/Logo";
import { MenuItem } from "./MenuItem";
import FadeItem from "../../../lib/components/FadeItem";
import imagenApostoles from "../../../img/apostoles.jpg";
import GeneralContext from "../../../lib/context";

export const Menu = () => {
  const { menuSelected } = useContext(GeneralContext);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isTall = menuSelected === "pagina-principal" && !isScrolled;

  return (
    <div className="Menu">
      <img
        src={imagenApostoles}
        alt="imagenApostoles"
        className={`menu-img ${isTall ? "tall" : "short"}`}
      />

      <div className="overlay"></div>

      <div className="content">
        <div className="cabecera">
          <Logo />
          <div className="menu-items">
            <MenuItem name={"Inicio"} link={"pagina-principal"} />
            <MenuItem name={"La casa"} link={"la-casa"} />
            <MenuItem
              name={"Ministerios"}
              link={"ministerios"}
              subItems={[
                { name: "Oración", link: "ministerios/oracion" },
                { name: "Música", link: "ministerios/musica" },
                { name: "Liturgia", link: "ministerios/liturgia" },
              ]}
            />
            <MenuItem name={"Contacto"} link={"contacto"} />
          </div>
        </div>
        {menuSelected === "pagina-principal" && !isScrolled && (
          <FadeItem className="mensaje">
            <div className="cita">
              "Venid a mí los que estáis cansados y agobiados, y yo os aliviaré"
            </div>
            <div className="referencia">Mateo 11:28-30</div>
          </FadeItem>
        )}
      </div>
    </div>
  );
};
