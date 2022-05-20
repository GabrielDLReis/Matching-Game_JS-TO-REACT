import './styles.css'
function ArrowDown(currentPlayer = 1) {
  return /*html */ `
    <img  class="arrow-down"
    data-currentPlayer="${currentPlayer}"
    src="images/arrow.png" alt="Ícone de uma seta para baixo" />
  `
}

export default ArrowDown
