import React from "react";
import { useFadeOnScroll } from "./useFadeOnScroll";

export default function FadeItem({ children, className }) {
  const [ref, isVisible] = useFadeOnScroll();
  return (
    <div ref={ref} className={`fade-up ${isVisible ? "visible" : ""} ${className || ""}`}>
      {children}
    </div>
  );
}