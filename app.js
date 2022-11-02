const express = require('express');

const app = express();

const cors = require('cors');
const morgan = require('morgan');

app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));

app.get('/api/ping', (req, res) => res.send('pong'));

module.exports = app;
