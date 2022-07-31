import './style.scss'
import comunityImg from '../../assets/images/comunity.svg'


export function About(props) {
    return (
        <section className='about' id={props.id}>
            <div className='about-container'>
                <img src={comunityImg} alt="comunidade" className='svg-img' />
                <div className='about-text-content'>
                    <h2>Sobre o servidor</h2>
                    <p>
                        O 4ano é um servidor no Discord fundado em 2018 por 5 players que buscavam<br />
                        um espaço interativo para jogarem e se comunicarem, desde então, o 4ano cresceu<br />
                        e se tornou uma grande comunidade!
                    </p>
                </div>
            </div>
        </section>
    )
}