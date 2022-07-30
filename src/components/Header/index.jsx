import './styles.scss';

import serverLogo from "../../assets/images/logo4ano.png"

import { Link } from "react-scroll"

export function Header() {
    return (
        <header className="siteHeader">
            <img className="serverLogo" src={serverLogo} alt="4ano ícone" />
            <div className="right-content">
                <Link
                    className="header-link"
                    to="discordLink" spy={true} smooth={true} offset={-60} duration={800}
                >
                    Discord
                </Link>
            </div>
        </header>
    )
}