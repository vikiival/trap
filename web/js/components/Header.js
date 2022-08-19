export default function Header() {
  const header = document.createElement('header')

  const heading = document.createElement('h1')
  heading.classList.add('title')
  heading.innerText = 'Trapcards'
  
  const previewLabel = document.createElement('p')
  previewLabel.classList.add('link-preview')
  previewLabel.innerHTML = 'https://trap.ltd/<span>[trapcard name]</span>'

  header.appendChild(heading)
  header.appendChild(previewLabel)

  return header
}