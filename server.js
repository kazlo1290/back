// modules
const express = require('express');
const app = express();
const path = require('path');
require('colors');
require('dotenv').config();
const cors = require('cors');
// src
const { proHandler } = require('./middleware/production');
const { connectMongo } = require('./config/connectMongo');
connectMongo();
const port = process.env.PORT || 4000;
const corsOptions = {
  origin: ['*'],
  optionsSuccessStatus: 200,
};
// front
function FrontendCall() {
  // Check Production
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, './client/dist')));

    app.get('*', cors(corsOptions), (req, res) =>
      res.sendFile(
        path.resolve(__dirname, './', 'client', 'dist', 'index.html'),
      ),
    );
  } else {
    app.get('*', cors(corsOptions), (req, res) =>
      res.send('set to production'),
    );
  }

  app.use(proHandler);
}

// Use
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/file', express.static('uploads'));

// Routes
const apiV1 = '/api/v1/';
app.use(`${apiV1}users`, cors(corsOptions), require('./routes/user.routes'));
app.use(`${apiV1}posts`, cors(corsOptions), require('./routes/post.routes'));
app.use(`${apiV1}songs`, cors(corsOptions), require('./routes/song.routes'));

// Serve frontend
FrontendCall();

// listen port
app.listen(port, () => console.log(`Server running on port ${port.yellow}`));
