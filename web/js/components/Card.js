import CopyButton from './CopyButton.js'

// Async Card "component" which will resolve its parent a element
// after the image loads
export default function Card({ url, name, compactMode }) {
  return new Promise((resolve) => {
    const card = document.createElement('article')
    card.classList.add('card')
    
    const img = document.createElement('img')
    img.classList.add('card-image')
    img.src = url
    img.alt = name
  
    const btn = CopyButton({ name })

    compactMode.subscribe((isCompact) => {
      if (isCompact) {
        card.classList.add('compact')
        img.hidden = true
      } else {
        card.classList.remove('compact')
        img.hidden = false
      }
    })
  
    card.appendChild(img)
    card.appendChild(btn)
  
    img.onload = () => resolve(card)
    img.onerror = () => resolve(card)
  })
}