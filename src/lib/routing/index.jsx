import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../../App";
import { Casa } from "../../modules/casa/components/Casa";
import { Inicio } from "../../modules/init/components/Inicio";
import { Contacto } from "../../modules/contacto/components/Contacto";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <App />
      </>
    ),
    children: [
      {
        path: '/',
        element: (
          <>
            <Navigate to="/pagina-principal" replace />
          </>
        ),
      },
      {
        path: "pagina-principal",
        element: <Inicio />,
      },
      {
        path: "la-casa",
        element: <Casa />,
      },
      {
        path: "contacto",
        element: <Contacto />,
      },
      {
        path: "*",
        element: (
          <>
            {/* <App /> */}
          </>
        ),
      },
    ],
  },
]);

export default router;
