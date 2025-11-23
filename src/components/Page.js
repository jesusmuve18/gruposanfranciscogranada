import React from "react"
import {Inicio} from './Inicio'
import {Ministerios} from './Ministerios'

import '../styles/Page.css'

export const Page = (props) => {

    const selectMenu = () => {
        switch (props.selected){
            case 'pagina-principal':
                return <Inicio/>
                break;
            case 'ministerios':
                return <Ministerios/>
                break;
            default:
                return ""
        }
    }
  return(
    <div className="contenedor">
       <div className="pagina">
            {selectMenu()}
        </div> 
    </div>
  )
}