import './src/styles/settings/colors.css'
import './src/styles/generic/reset.css'
import './src/styles/elements/base.css'
import BoardGame from './src/Objects/BoardGame'
import PlayerName from './src/components/PlayerName'
import ScoreBoard from './src/Objects/ScoreBoard'

const $root = document.querySelector('#root')

$root.insertAdjacentHTML(
  'beforeend',
  `
  ${ScoreBoard()}
  ${BoardGame(6)}
  
  `
)
