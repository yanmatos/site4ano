import { useState, useEffect } from "react"

import { Home } from './components/Home'
import { About } from './components/About'
import { Qualities } from "./components/Qualities"
import { Games } from "./components/Games"
import { Footer } from "./components/Footer"
import "./styles/app.scss"

import "./styles/global.scss"

function App() {
  const [aboutVisible, setAboutVisible] = useState(false)
  const [qualitiesVisible, setQualitiesVisible] = useState(false)
  const [gamesVisible, setGamesVisible] = useState(false)
 

 
useEffect(() => {
    const intersectionObserverAbout = new IntersectionObserver((entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
            setAboutVisible(true)
        }
    })

    intersectionObserverAbout.observe(document.querySelector('.about-container'))

    return () => intersectionObserverAbout.disconnect()

}, [])


useEffect(() => {
  const intersectionObserverQualities = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
          setQualitiesVisible(true)
      }
  })

  intersectionObserverQualities.observe(document.querySelector('.qualities-container'))

  return () => intersectionObserverQualities.disconnect()

}, [])


useEffect(() => {
    const intersectionObserverGames = new IntersectionObserver((entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
            setGamesVisible(true)
        }
    })

    intersectionObserverGames.observe(document.querySelector('.games-container'))

    return () => intersectionObserverGames.disconnect()

}, [])


  return (
    <div>
      <div>
        <Home />
        <About id={aboutVisible ? 'aboutIsVisible' : 'aboutIsntVisible'} />
        <Qualities  id={qualitiesVisible ? 'qualitiesIsVisible' : 'qualitiesIsntVisible'}/>
        <Games  id={gamesVisible ? 'gamesIsVisible' : 'gamesIsntVisible'} />
        <div className="discord-content" id="discordLink">
          <h3>Embarque com a gente</h3>
          <a className="discord-link" href="https://discord.gg/apJTJQmQ2D" target='_blank' rel='external'>Entrar no servidor</a>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
