import FadeItem from "../../../lib/components/FadeItem"

export const Display = (props) => {
  return(
    <FadeItem>
        <p>{props.content}</p>
    </FadeItem> 
  )
}