import "../styles/Page.css";
import FadeItem from "./FadeItem";
import { SideProgress } from "./SideProgress";

export const Page = ({ children, sections }) => {
  return (
    <div className="contenedor">
      {sections && <SideProgress sections={sections} />}
      <div className="pagina">
        <>
          {sections
            ? sections?.map((item, index) => (
                <div key={index} id={item.id} className="seccion">
                  <FadeItem>
                    <h1>{item.title}</h1>
                  </FadeItem>
                  <FadeItem>{item.content}</FadeItem>
                </div>
              ))
            : children}
        </>
      </div>
    </div>
  );
};
