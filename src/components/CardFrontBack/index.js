import CardGame from '../CardGame'
import './styles.css'

function CardFrontBack() {
  window.cardFrontBack = {}
  window.cardFrontBack.handleClick = event => {
    const $origin = event.target
    const $cardFrontBack = $origin.closest('.card-front-back').classList
    if ($cardFrontBack.target === $cardFrontBack.target(2)) {
      $cardFrontBack.classList.remove('-active')
    } else {
      $cardFrontBack.toggle('-active')
    }

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
        ${CardGame('javascript', 'logo do Javascript')}
      </div>
    </article>
  `
}

export default CardFrontBack
