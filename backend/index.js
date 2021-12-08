require('dotenv').config()
const express = require('express')
const sequelize = require('./db.js')
const cors = require('cors')
const PORT = process.env.PORT || 4000
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', router)
app.use(errorHandler)

const start = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync()
    app.listen(PORT, () => console.log(`Server has been started on port ${PORT}`))
  } catch (error) {
    console.log(error)
  }
}

start()
