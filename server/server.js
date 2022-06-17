const express = require('express')
const path = require('path')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000
const cors = require('cors');

connectDB()

const app = express()
app.use(cors());

var corsOptions = {
  origin: [
    "https://www.colorfully.mn", 
    "https://colorfully.mn", 
    "https://*.colorfully.mn",
    "http://localhost:4000/"
  ],
  optionsSuccessStatus: 200
}

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/users', require('./routes/userRoutes'))
app.use('/posts', require('./routes/postRoutes'))
app.use('/api/songs', require('./routes/song'))

// Serve frontend
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')))
  
    app.get('*', cors(corsOptions), (req, res, next) =>
      res.sendFile(
        path.resolve(__dirname, '../', 'client', 'build', 'index.html')
      )
    )
  } else {
    app.get('/', cors(corsOptions), (req, res, next) => res.send('production дээр тохируулна уу'))
  }
  
app.use(errorHandler)

app.listen(port, () => console.log(`${port} порт дээр сервер ажиллаж байна.`))