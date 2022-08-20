import Header from './components/Header.js'
import CardsContainer from './components/CardsContainer.js'
import Footer from './components/Footer.js'
import state from './lib/state.js'

window.onload = async () => {
  const main = document.querySelector('main')
  const compactMode = state(false)

  main.appendChild(Header({ compactMode }))
  main.appendChild(await CardsContainer({ compactMode }))
  main.appendChild(Footer())
}