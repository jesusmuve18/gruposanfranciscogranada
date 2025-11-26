import "./App.css";
import { Menu } from "./modules/menu/components/Menu";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Menu />
      <Outlet />
    </>
  );
}

export default App;
