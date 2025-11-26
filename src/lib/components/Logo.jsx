import LogoImg from "../../img/logo.jpg"
import "../../styles/Logo.css"

export const Logo = () => {
    return (
        <div className="logo">
            <img src={LogoImg} alt="logoSf" className="logo-img"/>
            <div className="logo-txt">
                Grupo San Francisco <br/> Granada
            </div>
        </div>
    )
}