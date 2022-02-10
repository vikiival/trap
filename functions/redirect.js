export async function handler(event) {
  const res = event.path.split('/')[1]

  if (!res) {
    return {
      statusCode: 200,
      body: 'OK!'
    }
  }

  return {
    statusCode: 302,
    headers: {
      Location: `https://raw.githubusercontent.com/vikiival/trap/master/src/images/${res}.png`,
    }
  }
}