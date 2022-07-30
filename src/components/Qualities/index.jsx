import './styles.scss';

export function Qualities(props) {
    return (
        <section className="qualities"{...props}>
            <h1>O melhor do servidor</h1>
            <div className='qualities-container' id = {props.id}>
                <div className="qualities-list">
                    <div className='card'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M0 36v-2.65q0-1.95 2.1-3.15T7.5 29q.65 0 1.2.025.55.025 1.1.125-.4.85-.6 1.725-.2.875-.2 1.875V36Zm12 0v-3.25q0-3.25 3.325-5.25t8.675-2q5.4 0 8.7 2 3.3 2 3.3 5.25V36Zm27 0v-3.25q0-1-.175-1.875t-.575-1.725q.55-.1 1.1-.125Q39.9 29 40.5 29q3.4 0 5.45 1.2Q48 31.4 48 33.35V36Zm-15-7.5q-4 0-6.5 1.2T15 32.75V33h18v-.3q0-1.8-2.475-3T24 28.5Zm-16.5-1q-1.45 0-2.475-1.025Q4 25.45 4 24q0-1.45 1.025-2.475Q6.05 20.5 7.5 20.5q1.45 0 2.475 1.025Q11 22.55 11 24q0 1.45-1.025 2.475Q8.95 27.5 7.5 27.5Zm33 0q-1.45 0-2.475-1.025Q37 25.45 37 24q0-1.45 1.025-2.475Q39.05 20.5 40.5 20.5q1.45 0 2.475 1.025Q44 22.55 44 24q0 1.45-1.025 2.475Q41.95 27.5 40.5 27.5ZM24 24q-2.5 0-4.25-1.75T18 18q0-2.55 1.75-4.275Q21.5 12 24 12q2.55 0 4.275 1.725Q30 15.45 30 18q0 2.5-1.725 4.25T24 24Zm0-9q-1.25 0-2.125.85T21 18q0 1.25.875 2.125T24 21q1.3 0 2.15-.875Q27 19.25 27 18q0-1.3-.85-2.15Q25.3 15 24 15Zm0 18Zm0-15Z" /></svg>
                        <div className='description'>
                            <h3>Faça Amigos</h3>
                            <p >O 4ano é o lugar ideal para fazer amizade com outros players!</p>
                        </div>
                    </div>
                    <div className='card'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M19.65 42q-3.15 0-5.325-2.175Q12.15 37.65 12.15 34.5q0-3.15 2.175-5.325Q16.5 27 19.65 27q1.4 0 2.525.4t1.975 1.1V6h11.7v6.75h-8.7V34.5q0 3.15-2.175 5.325Q22.8 42 19.65 42Z" /></svg>
                        <div className='description'>
                            <h3>Ouça musica</h3>
                            <p >O servidor possui diversos bots de musicas para ouvir enquanto joga!</p>
                        </div>
                    </div>
                    <div className='card'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m4 44 9.3-26 16.85 16.65Zm5.05-5.05 15.7-5.6-10.15-10.2Zm18.8-13.2-1.7-1.7 12-12q1.6-1.6 4.05-1.625Q44.65 10.4 46.25 12l.85.85-1.7 1.7-.95-.95q-.95-.95-2.2-.975Q41 12.6 40 13.6ZM19.9 18l-1.7-1.7 1.5-1.5q1.15-1.15 1.075-2.625Q20.7 10.7 19.7 9.7l-1.4-1.4L20 6.6l1.3 1.3q1.75 1.75 1.725 4.375Q23 14.9 21.25 16.65Zm4.05 3.85-1.7-1.7 7.6-7.6q.95-.95.925-2.425Q30.75 8.65 29.8 7.7l-3.05-3.05 1.7-1.7L31.6 6.1q1.55 1.6 1.6 4.025.05 2.425-1.55 4.025Zm7.9 7.95-1.7-1.7 2.35-2.35q1.75-1.75 4.2-1.8 2.45-.05 4.2 1.7l2.55 2.55-1.7 1.7-2.6-2.6q-1.15-1.15-2.4-1.15t-2.4 1.15Zm-22.8 9.15Z" /></svg>
                        <div className='description'>
                            <h3>Se divirta</h3>
                            <p >O servidor é um ambiente com muita diversão e interação!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}