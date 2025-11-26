import { useContext } from "react";
import "../styles/MenuItem.css";
import GeneralContext from "../../../lib/context";

export const MenuItem = (props) => {
  const { menuSelected, setMenuSelected, submenuOpen, setSubmenuOpen } =
    useContext(GeneralContext);

  const select = (item) => {
    setMenuSelected(item.link);
  };

  const selected = () => {
    return menuSelected === props.link;
  };

  /** Gestión del submenú */
  const hasSubItems = props.subItems && props.subItems.length > 0;
  const handleClick = () => {
    if (hasSubItems) {
      setSubmenuOpen(!submenuOpen);
      select(props);
    } else {
      setSubmenuOpen(false);
      select(props);
    }
  };

  return (
    <div
      className={`menu-item ${selected() ? "selected" : ""}`}
      onClick={handleClick}
    >
      {props.name}
      {hasSubItems && submenuOpen && (
        <div className={`submenu ${submenuOpen ? "open" : ""}`}>
          {props.subItems.map((sub) => (
            <div
              key={sub.link}
              className="submenu-item"
              onClick={() => select(sub)}
            >
              {sub.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
