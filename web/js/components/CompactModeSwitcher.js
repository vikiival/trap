const CompactModeSwitcher = () => {
  const button = document.createElement('button')

  compactMode.subscribe((isCompact) => {
    button.innerText = isCompact ? 'On' : 'Off'
  })

  return button
}

export default CompactModeSwitcher