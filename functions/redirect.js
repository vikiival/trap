const imageExists = (name) => new Promise((resolve, reject) => {
  const options = {
    hostname: 'raw.githubusercontent.com',
    port: 443,
    path: `/vikiival/trap/master/images/${name}.png`,
    method: 'GET'
  }

  const req = require('https').request(options, (res) => {
    resolve(res.statusCode === 404 ? '404' : name)
  })

  req.on('error', () => resolve('404'))

  req.end()
})

export async function handler(event) {
  const [, res] = event.path.split('/')
  const name = await imageExists(res.toLowerCase())

  return {
    statusCode: 302,
    headers: {
      Location: `https://raw.githubusercontent.com/vikiival/trap/master/images/${name}.png`,
    }
  }
}