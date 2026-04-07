import { useContext, useEffect, useState } from "react";
import "../styles/Menu.css";
import { Logo } from "../../../lib/components/Logo";
import { MenuItem } from "./MenuItem";
import FadeItem from "../../../lib/components/FadeItem";
import imagenApostoles from "../../../img/apostoles_IA.png";
import GeneralContext from "../../../lib/context";

export const Menu = () => {
  const { menuSelected } = useContext(GeneralContext);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let startY = 0;

    // Detectar la rueda del ratón (PC)
    const handleWheel = (e) => {
      if (e.deltaY > 0) {
        // Rueda hacia abajo: encoge inmediatamente
        setIsScrolled(true);
      } else if (e.deltaY < 0 && window.scrollY === 0) {
        // Rueda hacia arriba Y estamos al principio de la página: vuelve a crecer
        setIsScrolled(false);
      }
    };

    // Detectar dónde pone el dedo el usuario (Móvil)
    const handleTouchStart = (e) => {
      startY = e.touches[0].clientY;
    };

    // Detectar hacia dónde mueve el dedo (Móvil)
    const handleTouchMove = (e) => {
      const currentY = e.touches[0].clientY;
      const deltaY = startY - currentY; // Positivo si arrastra hacia arriba (baja la página)

      if (deltaY > 10) {
        setIsScrolled(true);
      } else if (deltaY < -10 && window.scrollY === 0) {
        setIsScrolled(false);
      }
    };

    window.addEventListener("wheel", handleWheel);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
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
