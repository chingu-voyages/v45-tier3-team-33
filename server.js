const express = require('express')
const mongoose = require('mongoose')
const connectDB = require('./config/database')
const userRoutes = require('./routes/users')
const cors = require('cors')
const passport = require('passport')
const app = express()

require('dotenv').config({ path: './config/.env' })

connectDB()

// Body parser
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(cors())

app.use(passport.initialize())

require('./middlewares/passport')(passport)

app.use('/api/users', userRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`)
})