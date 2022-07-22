const express = require('express');
const bodyParser = require('body-parser');
const colors = require('colors')
const dotenv = require('dotenv').config()
const cors = require('cors');
const port = process.env.PORT || 4000;

console.log("Host: ".bgRed + process.env.DB_HOST.yellow.underline)
console.log("User: ".bgRed + process.env.DB_USERNAME.yellow.underline)

const app = express();
app.use(cors());

var corsOptions = {
  origin: [
    "https://*.colorfully.mn",
    "https://colorfully.mn"
  ],
  optionsSuccessStatus: 200
}


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.get('/', cors(corsOptions), (req, res) => {
  res.send('Hello World');
  res.redirect('https://colorfully.mn')
});
// Routes
app.use('/api/v1/employee', cors(corsOptions), require('./routes/employee.route'))

// listen to the port
app.listen(port, () => console.log(`Port: `.bgRed + `${port.yellow.underline}`))