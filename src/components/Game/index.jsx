// Style
import './styles.scss'

export function Game(props) {
   return(
      <div>
         <div className = "game-card">
            <img className = "game-image" src={props.image} alt="game" />
            <div className = "game-title">
               {props.title}
            </div> 
            <div className = "game-description">
               {props.description}
            </div> 
         </div>
      </div>
   )
}