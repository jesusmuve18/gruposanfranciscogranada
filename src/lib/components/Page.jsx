import "../styles/Page.css";

export const Page = ({ children }) => {
  return (
    <div className="contenedor">
      <div className="pagina">{children}</div>
    </div>
  );
};
