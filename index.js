require('dotenv').config()
const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 4000
const router = require('./routes/index')

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', router)

const start = async () => {
  try {
    app.listen(PORT, () => console.log(`Server has been started on port ${PORT}`))
  } catch (error) {
    console.log('Cant connect to database: ', error)
  }
}

start()