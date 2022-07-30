import './style.scss'
import ninjaImg from '../../assets/images/ninja.svg'


export function Games(props) {
    return (
        <section className='games' id={props.id}>
            <div className='games-container'>
                <img src={ninjaImg} alt="imagem de um jogador" className='games-svg-img' />
                <div className='games-text-content'>
                    <h2>Lugar de grande jogos</h2>
                    <p>
                        Dentre os jogos mais populares do servidor, estão o CSGO, League of Legends, Valorant,
                        Fall Guys e Among Us.
                    </p>
                </div>
            </div>
        </section>
    )
}