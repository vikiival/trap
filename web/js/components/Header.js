import CompactModeSwitcher from './CompactModeSwitcher.js'

export default function Header({ compactMode }) {
  const header = document.createElement('header')

  const heading = document.createElement('h1')
  heading.classList.add('title')
  heading.innerText = 'Trapcards'
  
  const previewLabel = document.createElement('p')
  previewLabel.classList.add('link-preview')
  previewLabel.innerHTML = 'https://trap.ltd/<span>[trapcard name]</span>'

  header.appendChild(heading)
  header.appendChild(previewLabel)
  header.appendChild(CompactModeSwitcher({ compactMode }))

  return header
}