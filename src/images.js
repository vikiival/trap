const fs = require('fs')
const path = require('path')

const cache = new Map()

const dir = path.join(__dirname, './images')
const files = fs.readdirSync(dir, { encoding: 'utf-8' })

for (const file of files) {
  const [filename] = file.split('.')
  const filepath = path.join(__dirname, `./images/${file}`)
  cache.set(filename, filepath)
}

const getImageByName = (name) => cache.get(name)

exports.getImageByName = getImageByName
exports.images = [...cache.keys()]