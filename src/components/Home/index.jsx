import './styles.scss'

import { Header } from '../Header'

import aboutImg from '../../assets/images/games.jpg'

export function Home() {
    return (
        <section className="background-image-content" style={
            {
                backgroundImage: `url(${aboutImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
            <Header />
            <div className='home-container'>
                <div className="home">
                    <h1 className="home-title">Bem vindo ao 4ano</h1>
                </div>
            </div>
            <a className = 'freepikLink' href="https://br.freepik.com/fotos-vetores-gratis/gamer" target='_blank' rel='noreferrer external nofollow'>Designed by Freepik</a>
        </section>
    )
}