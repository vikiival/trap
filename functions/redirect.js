export async function handler(event) {
  const res = event.path.split('/')[1]

  return {
    statusCode: 302,
    headers: {
      Location: `https://raw.githubusercontent.com/vikiival/trap/master/src/images/${res}.png`,
    }
  }
}