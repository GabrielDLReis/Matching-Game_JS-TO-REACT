import './src/styles/settings/colors.css'
import './src/styles/generic/reset.css'
import './src/styles/elements/base.css'
import BoardGame from './src/Objects/BoardGame'

// import PlayerScore from './src/components/PlayerScore'

const $root = document.querySelector('#root')
// const $htmlPlayerScore = PlayerScore()
const $htmlBoardGame = BoardGame(6)

// $root.insertAdjacentHTML('beforebegin', $htmlPlayerScore)

$root.insertAdjacentHTML('beforeend', $htmlBoardGame)
