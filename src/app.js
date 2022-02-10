require('dotenv').config()

const path = require('path')
const { getImageByName, images } = require('./images')
const express = require('express')
const app = express()

app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'ejs')

app.get('/', (_, res) => {
  res.render('index', { images })
})

app.get('/:img', (req, res) => {
  const image = getImageByName(req.params.img)

  if (image) {
    return res.sendFile(image)
  }
  
  res.send().end()
})

app.listen(process.env.PORT, () => {
  console.log(`[i] Server is running at :${process.env.PORT}`)
})