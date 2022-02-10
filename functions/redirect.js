export async function handler(event) {
  const [, res = '404'] = event.path.split('/')

  return {
    statusCode: 302,
    headers: {
      Location: `https://raw.githubusercontent.com/vikiival/trap/master/src/images/${res}.png`,
    }
  }
}

