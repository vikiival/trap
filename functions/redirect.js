export async function handler(event) {
  const [, res] = event.path.split('/')
  const name = res.toLowerCase() || '404'

  return {
    statusCode: 302,
    headers: {
      Location: `https://raw.githubusercontent.com/vikiival/trap/master/images/${name}.png`,
    }
  }
}

