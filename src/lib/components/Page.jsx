import { useContext } from "react";
import { Inicio } from "../../modules/init/components/Inicio";
import { Ministerios } from "../../modules/ministerios/components/Ministerios";

import "../styles/Page.css";
import GeneralContext from "../context";

export const Page = () => {
  const { menuSelected } = useContext(GeneralContext);

  const selectMenu = () => {
    switch (menuSelected) {
      case "pagina-principal":
        return <Inicio />;
      case "ministerios":
        return <Ministerios />;
      default:
        return "";
    }
  };

  return (
    <div className="contenedor">
      <div className="pagina">{selectMenu()}</div>
    </div>
  );
};
