import {Inicio} from '../../modules/init/components/Inicio'
import {Ministerios} from '../../modules/ministerios/components/Ministerios'

import '../styles/Page.css'

export const Page = (props) => {

    const selectMenu = () => {
        switch (props.selected){
            case 'pagina-principal':
                return <Inicio/>
            case 'ministerios':
                return <Ministerios/>
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