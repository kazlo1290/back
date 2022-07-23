const express = require('express');
const path = require('path');
const colors = require('colors')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const cors = require('cors');
const port = process.env.PORT || 4000;

function FrontendCall() {

    // Serve frontend
    if (process.env.NODE_ENV === 'production') {
        app.use(express.static(path.join(__dirname, './client/build')))

        app.get('*', cors(corsOptions), (req, res) =>
            res.sendFile(
                path.resolve(__dirname, './', 'client', 'build', 'index.html')
            )
        )
    } else {
        app.get('/', cors(corsOptions), (req, res) => res.send('production дээр тохируулна уу'));
    }

    app.use(errorHandler);
    
}

const app = express();
app.use(cors());

var corsOptions = {
    origin: [
        "https://*.colorfully.mn",
        "https://colorfully.mn"
    ],
    optionsSuccessStatus: 200
};

// Use
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Database Choose
if (process.env.DB_CHOOSE == 'MONGODB') {

    const connectDB = require('./config/db.js')
    connectDB();

    // Routes
    app.use('/users', cors(corsOptions), require('./mongo/routes/userRoutes'));
    app.use('/posts', cors(corsOptions), require('./mongo/routes/postRoutes'));
    app.use('/api/songs', cors(corsOptions), require('./mongo/routes/song'));

    // Serve frontend
    FrontendCall();

    // listen port
    app.listen(port, () => console.log(`Port: `.bgRed + `${port.yellow.underline}`))
} else 
if (process.env.DB_CHOOSE == 'MYSQL') {

    console.log("Host: ".bgRed + process.env.DB_HOST.yellow.underline)
    console.log("User: ".bgRed + process.env.DB_USERNAME.yellow.underline)
    
    // Routes
    app.use('/api/v1/employee', cors(corsOptions), require('./mysql/routes/employee.route'))

    // Serve frontend
    FrontendCall();

    // listen port
    app.listen(port, () => console.log(`Port: `.bgRed + `${port.yellow.underline}`))

};