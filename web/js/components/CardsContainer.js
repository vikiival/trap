import Card from './Card.js'

export default async function CardsContainer({ compactMode }) {
  const response = await fetch(
    'https://api.github.com/repos/vikiival/trap/contents/images?ref=master'
  )
  const json = await response.json()
  const images = json.map((file) => ({
    name: file?.name?.split('.')[0] ?? 'Error',
    url: file?.name ? `/images/${file.name}` : 'https://http.cat/418',
  }))

  const section = document.createElement('section')
  compactMode.subscribe((isCompact) => {
    if (isCompact) {
      section.classList.add('compact')
    } else {
      section.classList.remove('compact')
    }
  })

  const cards = await Promise.all(
    images.map((img) => Card({
      ...img,
      compactMode,
    }))
  )

  for (const card of cards) {
    section.appendChild(card)
  }

  return section
}