import logo4ano from "../../assets/images/logo4ano.png"
import "./styles.scss"

export function Footer() {
    return (
        <footer className="footer-content">
            <img src={logo4ano} alt="logo 4ano" />
            <div className="footer-message">#OMELHORDOMUNDO</div>
        </footer>
    )
}