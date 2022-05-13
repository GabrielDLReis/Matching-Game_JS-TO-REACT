import './styles.css'

function CardGame(icon = 'alura-pixel', alt = 'Logo da Alura') {
  return /*html*/ `

    <article class="card-game">
    <img src="images/${icon}.png" alt="${alt}">
    </article >
  `
}

export default CardGame

// <article class="card-game">
//   <img src="images/alura-pixel.png" alt="logo da alura">
// </article>
// <article class="card-game">
//   <img src="images/alura-pixel.png" alt="logo da alura">
// </article>
// <article class="card-game">
//   <img src="images/alura-pixel.png" alt="logo da alura">
// </article>
// <article class="card-game">
//   <img src="images/alura-pixel.png" alt="logo da alura">
// </article>
// <article class="card-game">
//   <img src="images/alura-pixel.png" alt="logo da alura">
// </article>
