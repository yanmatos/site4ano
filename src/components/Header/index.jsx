// Images
import serverLogo from "../../assets/images/4anologo.png"
// Styles 
import "./styles.scss"

export function Header(){
    return (
        <div>
            <header className = "siteHeader">
                <img className = "serverName" src = {serverLogo} alt = "4ano ícone"/>
                <div className = "headerButtons">
                    <button 
                    className = "discordButton"
                    onClick = {() =>console.log('alo')}
                    >
                        Servidor no Discord
                    </button>       
                </div>
            </header>
        </div>
    )
}