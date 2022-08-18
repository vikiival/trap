const CopyButton = (props) => {
  const btn = document.createElement('button')
  btn.classList.add('card-copy-button')

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

export default CopyButton