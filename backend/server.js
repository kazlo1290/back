const express = require('express')
const path = require('path')
const colors = require('colors')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000
const cors = require('cors');

connectDB()

const app = express()
app.use(cors());

var corsOptions = {
  origin: 'https://colorfully.mn',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/posts', require('./routes/postRoutes'))
app.use('/api/roles', require('./routes/roleRoutes'))

// Serve frontend
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/build')))
  
    app.get('*', cors(corsOptions), (req, res, next) =>
      res.sendFile(
        path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
      )
    )
  } else {
    app.get('/', cors(corsOptions), (req, res, next) => res.send('production дээр тохируулна уу'))
  }
  
app.use(errorHandler)

app.listen(port, () => console.log(`${port} порт дээр сервер ажиллаж байна.`))