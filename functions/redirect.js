export async function handler(event) {
  const [, res] = event.path.split('/')

  return {
    statusCode: 302,
    headers: {
      Location: `https://raw.githubusercontent.com/vikiival/trap/master/src/images/${res || '404'}.png`,
    }
  }
}

