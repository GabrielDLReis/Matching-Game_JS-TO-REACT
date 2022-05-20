import PlayerName from '../../components/PlayerName'
import './styles.css'

import VsPlayer from '../../components/VsPlayer'
import PlayerScore from '../../components/PlayerScore'
import ArrowDown from '../../components/ArrowDown'

function ScoreBoard() {
  return /*html*/ `
  <header class='score-board'>
    ${ArrowDown()}  
    ${PlayerName('Player1')}
    ${PlayerScore(3)}
    ${VsPlayer()}
    ${PlayerScore(3)}
    ${PlayerName('Player2')}  
  </header>
  `
}

export default ScoreBoard
// ${ArrowPlayer()}
