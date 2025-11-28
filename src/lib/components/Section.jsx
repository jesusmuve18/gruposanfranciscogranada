import FadeItem from "./FadeItem";


export const Section = ({title, content}) => {
  return (
    <div className="seccion">
      <FadeItem>
        <h1>{title}</h1>
      </FadeItem>
      <FadeItem>
        {content}
      </FadeItem>
    </div>
  );
};
