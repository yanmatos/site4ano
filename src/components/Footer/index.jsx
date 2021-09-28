import logo4ano from "../../assets/images/logo4ano.png"
import "./styles.scss"

export function Footer(){
    return(
        <div className = "footer-content">
            <img src={logo4ano} alt="logo 4ano" />
            <div className = "footer-message">#VENHASEDIVERTIR</div>
        </div>
    )
}