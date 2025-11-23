import React from "react"
import FadeItem from "./FadeItem";

export const Display = (props) => {
  return(
    <FadeItem>
        <p>{props.content}</p>
    </FadeItem> 
  )
}