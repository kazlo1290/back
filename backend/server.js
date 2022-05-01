const express = require('express')
const path = require('path')
const colors = require('colors')
const morgan = require('morgan');
const bodyParser = require('body-parser');
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
  origin: 'http://localhost:3001',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/users', require('./routes/userRoutes'))
app.use('/posts', require('./routes/postRoutes'))
app.use('/api', require('./routes/category.route'));
// app.use('/backend/uploads', express.static('backend/uploads'));
// app.use(express.static('./backend'));
app.use('/uploads/img', express.static('uploads/img'));
app.use(express.static('./public'));
// midllewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
      extended: true
    })
);
app.use((req, res) => {
    res.status(404).json({
        errors: "Хуудас олдсонгүй"
    })
})
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