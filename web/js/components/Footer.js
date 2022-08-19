export default function Footer() {
  const footer = document.createElement('footer')

  const footerParagraph = document.createElement('p')
  footerParagraph.classList.add('footer-text')

  const footerLink = document.createElement('a')
  footerLink.classList.add('footer-link')
  footerLink.href = 'https://github.com/vikiival/trap'
  footerLink.target = '_blank'
  footerLink.rel = 'noopener noreferrer'
  footerLink.innerText = 'Made with'

  const heart = document.createElement('img')
  heart.classList.add('footer-emoji')
  heart.alt = 'heart'
  heart.height = heart.width = '20'
  heart.src = 'https://github.githubassets.com/images/icons/emoji/unicode/2764.png'

  footerParagraph.appendChild(footerLink)
  footerParagraph.appendChild(heart)

  footer.append(footerParagraph)

  return footer
}