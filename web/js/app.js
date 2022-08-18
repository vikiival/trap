import Header from './components/Header.js'
import CardsContainer from './components/CardsContainer.js'
import Footer from './components/Footer.js'

window.onload = async () => {
  const main = document.querySelector('main')

  main.appendChild(Header())
  main.appendChild(await CardsContainer())
  main.appendChild(Footer())
}