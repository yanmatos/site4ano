// Components
import { Game } from '../Game'
// Styles
import "./styles.scss"

//images
import csgoImg from "../../assets/images/csgo.jpg"
import lolImg from "../../assets/images/lol.jpg"
import valorantImg from "../../assets/images/valorant.png"
import fallguysImg from "../../assets/images/fallguys.png"
import amongImg from "../../assets/images/among.jpg"

export function GamesList() {

    return (
        <div className = "main-content-games">
            <h1 className = "content-games-header">Jogos Populares</h1>
            <ul className = "games-content">
                <Game image = {csgoImg}title='Counter Strike' description="Jogo para quem gosta de um FPS"/>
                <Game image = {lolImg}title='League of Legends' description="Ta afim de um Moba? Lol é para você"/>            
                <Game image = {valorantImg}title='Valorant' description="Um FPS com poderes diferenciados"/>
                <Game image = {fallguysImg}title='Fall Guys' description="Battle Royale de Mini Games"/> 
                <Game image = {amongImg}title='AmongUs' description="Descubra quem é o impostor e sobreviva"/>    
            </ul>
        </div>
    )
}