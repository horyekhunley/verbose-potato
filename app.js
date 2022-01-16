const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const tutorial_routes = require('./src/routes/tutorial_routes')
require('dotenv').config()

const app = express()

const corsOptions = {
  origin: 'http://localhost:3000'
}
app.use(cors(corsOptions))

mongoose.connect(process.env.MONGOOSE_URI).then(() => {
  console.log('MongoDB connected...')
}).catch((err) => {
  console.log('MongoDB conection error', err)
  process.exit
})

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to this project' })
})

app.use('/tutorials', tutorial_routes)

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Server running in http://localhost:${port}`)
})