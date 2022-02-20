const CopyButton = (props) => {
  const btn = document.createElement('button')
  const states = {
    normal: ['🔗 ' + props.name, 'var(--accent)'],
    success: ['✅ Link copied', 'green'],
    error: ['❌ Error', 'red'],
  }

  const setState = (state, delay) => {
    if (!(state in states)) {
      state = 'normal'
    }

    const _set = () => {
      [btn.textContent, btn.style.color] = states[state]
    }

    delay ? setTimeout(_set, delay) : _set()
  }
  
  setState('normal')

  btn.onclick = () => {
    // On Safari, under certain conditions (probably because of the missing HTTPs)
    // the navigator.clipboard is undefined. Not the big issue tho, since this
    // is probably happening only with dev server
    if (!navigator?.clipboard?.writeText) {
      setState('error')
      setState('normal', 1000)
      return
    }

    navigator?.clipboard?.writeText('https://trap.ltd/' + props.name)
      .then(() => setState('success'))
      .catch(() => setState('error'))
      .finally(() => setState('normal', 1000))
  }

  return btn
}

// Async Card "component" which will resolve its parent a element
// after the image loads
const Card = (props) => new Promise((resolve, reject) => {
  const article = document.createElement('article')

  const img = document.createElement('img')
  img.src = props.url
  img.alt = props.name

  const btn = CopyButton({ name: props.name })

  article.appendChild(img)
  article.appendChild(btn)

  img.onload = () => resolve(article)
  img.onerror = () => resolve(article)
})

window.onload = async () => {
  const response = await fetch(
    'https://api.github.com/repos/vikiival/trap/contents/images?ref=master'
  )
  const json = await response.json()

  const images = json.map((file) => ({
    name: file?.name?.split('.')[0] || 'Error',
    url: file?.download_url || 'https://http.cat/418',
  }))

  const section = document.querySelector('section')

  for (const img of images) {
    const card = await Card(img)
    section.appendChild(card)

    // https://stackoverflow.com/a/39451131
    await new Promise(r => {
      setTimeout(() => {
        card.classList.add('visible')
        r()
      }, 0)
    })

    // Simulate a very small delay
    await new Promise(r => setTimeout(r, 75))
  }
}