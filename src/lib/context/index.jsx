import React, { useEffect, useState } from "react";
const GeneralContext = React.createContext({});

export function GeneralContextProvider({ children }) {
  const [isContextMounted, setIsContextMounted] = useState(false);
  const [menuSelected, setMenuSelected] = useState("pagina-principal");
  const [submenuOpen, setSubmenuOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsContextMounted(true);
    }, 10);
    return () => {
      setIsContextMounted(false);
    };
  }, []);

  return (
    isContextMounted && (
      <GeneralContext.Provider
        value={{ menuSelected, setMenuSelected, submenuOpen, setSubmenuOpen }}
      >
        {children}
      </GeneralContext.Provider>
    )
  );
}

export default GeneralContext;
