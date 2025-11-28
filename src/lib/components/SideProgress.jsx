import { useEffect, useState } from "react";
import "../styles/SideProgress.css";

export const SideProgress = ({ sections }) => {
  const [active, setActive] = useState(sections[0].id);

  useEffect(() => {
    const headerHeight = parseInt(
      getComputedStyle(document.documentElement)
        .getPropertyValue("--header-height")
        .replace("px", "")
    );

    const observers = [];

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(section.id);
          }
        },
        {
          rootMargin: `-${headerHeight}px 0px -50% 0px`,
          threshold: 0.1,
        }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [sections]);

  // const scrollToSection = (id) => {
  //   document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  // };
  const scrollToSection = (id) => {
    const headerHeight = parseInt(
      getComputedStyle(document.documentElement)
        .getPropertyValue("--header-height")
        .replace("px", "")
    );

    const element = document.getElementById(id);
    if (!element) return;

    const top =
      element.getBoundingClientRect().top +
      window.pageYOffset -
      headerHeight -
      10; // pequeño margen

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };

  return (
    <div className="side-progress">
      {sections.map((s) => (
        <div
          key={s.id}
          className={`side-item ${active === s.id ? "active" : ""}`}
          onClick={() => scrollToSection(s.id)}
        >
          <div className="side-dot"></div>
          <span>{s.title}</span>
        </div>
      ))}
    </div>
  );
};
