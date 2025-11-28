import "../styles/Icon.css";

export const Icon = ({ icon: IconComponent, title, color, url = "" }) => {
  return (
    <>
      {url ? (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <IconComponent size={32} color={color} />
        </a>
      ) : (
        <div className="info-item">
          <IconComponent size={28} weight="fill" color={color} />
          <span>{title}</span>
        </div>
      )}
    </>
  );
};
