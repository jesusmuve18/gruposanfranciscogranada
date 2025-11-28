import { useState } from "react";
import "../styles/Page.css";
import FadeItem from "./FadeItem";
import { SideProgressPages } from "./SideProgressPages";
import { SideProgress } from "./SideProgress";

export const Page = ({ children, sections, subpages }) => {
  const [activePage, setActivePage] = useState(subpages && subpages[0]?.id);
  const currentPage = subpages?.find((p) => p.id === activePage);

  return (
    <div className="contenedor">
      {subpages?.length > 0 ? (
        <>
          <SideProgressPages
            pages={subpages}
            activePage={activePage}
            setActivePage={setActivePage}
          />
          <div className="pagina">
            {currentPage?.sections &&
              currentPage?.sections?.map((item, index) => (
                <div key={index} id={item.id} className="seccion">
                  <FadeItem>
                    <h1>{item.title}</h1>
                  </FadeItem>
                  <FadeItem>{item.content}</FadeItem>
                </div>
              ))}
          </div>
        </>
      ) : (
        <>
          {sections && <SideProgress sections={sections} />}
          <div className="pagina">
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
          </div>
        </>
      )}
    </div>
  );
};
