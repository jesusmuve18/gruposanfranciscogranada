import { SideProgress } from "./SideProgress";

export const SideProgressPages = ({ pages, activePage, setActivePage }) => {

  const current = pages.find((p) => p.id === activePage);

  return (
    <div className="side-wrapper">
      <div className="side-progress">
        {pages.map((page) => (
          <div key={page.id}>
            <div
              className={`side-item ${activePage === page.id ? "active" : ""}`}
              onClick={() => setActivePage(page.id)}
            >
              <div className="side-dot"></div>
              <span>{page.title}</span>
            </div>
            {activePage === page.id && (
              <SideProgress sections={current.sections} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
