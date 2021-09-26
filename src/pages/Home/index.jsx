// Components
import { Founders } from "../../components/Founders"
import { GamesList } from "../../components/GamesList"
import { Opinions } from "../../components/Opinions"
import { Qualities } from "../../components/Qualities"
import "./styles.scss"

// Opinions Images 
import desenhoImage from "../../assets/images/desenho.png"
import snowmanImage from "../../assets/images/snowman.png"
import globoImage from "../../assets/images/globo.png"
import mountainImg from "../../assets/images/mountain.png"

// Qualities Images
import botsImg from "../../assets/images/bots.png"
import diversaoImg from "../../assets/images/diversao.png"
import comunidadeImg from "../../assets/images/comunidade.png"

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
                    <div className="headerButtons">
                        <Link
                            className="discordButton"
                            onClick={() => console.log('alo')}
                            to="discordLink" spy={true} smooth={true} offset={50} duration={750}
                        >
                            Servidor no Discord
                        </Link>
                    </div>
                </header>
            </div>
            <main className="main-content">
                <div className="aboutUs">
                    <h1 className="title-aboutUs">Um pouco sobre nós</h1>
                    <h2 className="about-content">O <strong>4ano</strong> é um servidor criado em 2018 por 5 players que buscavam<br />
                        um espaço legal para jogarem e se comunicarem, desde então o 4ano cresceu<br />
                        e se tornou mais que um servidor, se tornou um ecossistema!
                    </h2>
                </div>
            </main>
            <div className="qualities-list">
                <Qualities image={comunidadeImg} title="Faça Amigos" text="O 4ano é o lugar ideal para fazer amizade com outros players!" />
                <Qualities image={botsImg} title="Bots de música" text="O servidor possui diversos bots para você jogar ouvindo músicas!" />
                <Qualities image={diversaoImg} title="Diversão" text="Espere muita diversão no 4ano, nós buscamos a sua felicidade!" />
            </div>
            <Founders />
            <GamesList />
            <div className="opinions-list">
                <h1 className="title-op">Veja o que dizem os nossos membros</h1>
                <Opinions image={desenhoImage} text="O servidor é muito bom, me divirto muito!" name="João" />
                <Opinions image={snowmanImage} text="O 4ano é bom demais, é um estilo de vida!" name="Carlos" />
                <Opinions image={globoImage} text="Não existe servidor igual a esse!" name="Sergio" />
                <Opinions image={mountainImg} text="Esse servidor é realmente espetacular!" name="Fábio" />
            </div>
            <div className="discord-content">
                <h2>Servidor no Discord</h2>
                <img className="discord-img" src={discordImg} alt="logo do servidor" />
                <div className="discord-message">Junte-se aos mais de 180 membros do servidor</div>
                <a id="discordLink" className="discord-link" href="https://discord.gg/apJTJQmQ2D">Entrar no servidor</a>

            </div>
        </div>
    )
}