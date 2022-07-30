// Components
import { Founders } from "../../components/Founders"
import { GamesList } from "../../components/GamesList"
import { Opinions } from "../../components/Opinions"
import { Qualities } from "../../components/Qualities"
import { Footer } from "../../components/Footer"
import "./styles.scss"

// Opinions Images 
import desenhoImage from "../../assets/images/desenho.png"
import snowmanImage from "../../assets/images/snowman.png"
import globoImage from "../../assets/images/globo.png"
import mountainImg from "../../assets/images/mountain.png"

//server Image
import serverLogo from "../../assets/images/logo4ano.png"

//discord Image
import discordImg from "../../assets/images/logodiscord.png"

//react-scroll
import { Link } from "react-scroll"

export function Home() {
    return (
        <div>
            <div>
                <header className="siteHeader">
                    <img className="serverName" src={serverLogo} alt="4ano ícone" />
                    <div className="right-content">
                        <Link className="founder-link" to="founderLink" spy={true} smooth={true} offset={-50} duration={800}>Fundadores</Link>
                        <Link className="game-link" to="gamesLink" spy={true} smooth={true} offset={-80} duration={800}>Jogos</Link>
                        <div className="headerButtons">
                            <Link
                                className="discordButton"
                                onClick={() => console.log('alo')}
                                to="discordLink" spy={true} smooth={true} offset={-60} duration={800}
                            >
                                Servidor no Discord
                            </Link>
                        </div>

                    </div>

                </header>
            </div>
            <main className="main-content">
                <div className="aboutUs">
                    <h2 className="title-aboutUs">Sobre o 4ano</h2>
                    <p className="about-content">O 4ano é um servidor criado em 2018 por 5 players que buscavam<br />
                        um espaço legal para jogarem e se comunicarem, desde então o 4ano cresceu<br />
                        e se tornou mais que um servidor, se tornou um ecossistema!
                    </p>
                </div>
            </main>
            <Qualities/>
            <Founders />
            <GamesList />
            <div className="opinions-list">
                <h1 className="title-op">Veja o que dizem os nossos membros</h1>
                <Opinions image={desenhoImage} text="O servidor é muito bom, me divirto muito!" name="João" />
                <Opinions image={snowmanImage} text="O 4ano é bom demais, é um estilo de vida!" name="Carlos" />
                <Opinions image={globoImage} text="Não existe servidor igual a esse!" name="Sergio" />
                <Opinions image={mountainImg} text="Esse servidor é realmente espetacular!" name="Fábio" />
            </div>
            <div className="discord-content" id="discordLink">
                <h2>Servidor no Discord</h2>
                <img className="discord-img" src={discordImg} alt="logo do servidor" />
                <div className="discord-message">Junte-se aos mais de 180 membros do servidor</div>
                <a className="discord-link" href="https://discord.gg/apJTJQmQ2D">Entrar no servidor</a>
            </div>
            <Footer/>
        </div>
    )
}