import CardGame from '../CardGame'
import './styles.css'

function CardFrontBack(icon, altIcon) {
  window.cardFrontBack = {}
  window.cardFrontBack.handleClick = event => {
    const $origin = event.target
    const $cardFrontBack = $origin.closest('.card-front-back').classList
    $cardFrontBack.toggle('-active')

    // if (event === ) {
    //   console.log('Ativado')
    // } else {
    //   console.log('Desativado')
    // }
  }

  return /*html*/ `
    <article class='card-front-back' onClick="cardFrontBack.handleClick(event)">
      <div class="card -front">
        ${CardGame()}
      </div>
      <div class="card -back">
        ${CardGame(icon, altIcon)}
      </div>
    </article>
  `
}

export default CardFrontBack
