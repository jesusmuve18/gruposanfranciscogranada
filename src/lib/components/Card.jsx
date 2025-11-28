import "../styles/Card.css";

export const Card = ({ children, className = "card" }) => {
  return <div className={className}>{children}</div>;
};
