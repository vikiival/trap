import CopyButton from './CopyButton.js'

// Async Card "component" which will resolve its parent a element
// after the image loads
export default function Card(props) {
  return new Promise((resolve) => {
    const article = document.createElement('article')
    article.classList.add('card')
    
    const img = document.createElement('img')
    img.classList.add('card-image')
    img.src = props.url
    img.alt = props.name
  
    const label = document.createElement('p')
    label.innerText = props.name
    label.hidden = true
  
    const btn = CopyButton({ name: props.name })
  
    article.appendChild(img)
    article.appendChild(label)
    article.appendChild(btn)
  
    img.onload = () => resolve(article)
    img.onerror = () => resolve(article)
  })
}