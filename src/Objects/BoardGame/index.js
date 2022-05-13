import './styles.css'
import CardFromtBack from '../../components/CardFrontBack'

function BoardGame(amountCards) {
  const $htmlCardFrontBack = CardFromtBack()
  const $htmlContent = $htmlCardFrontBack.repeat(amountCards)

  return /*html*/ `
  <section class="board-game">
    ${$htmlContent}
  </section>
  `
}

export default BoardGame
