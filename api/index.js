/* api/index.js */

const bodyParser = require('body-parser');
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const errorHandler = require('../lib/errorHandler');
// Routers
const todosRouter = require('./todos/router');

const app = express();

// allow cross origin requests
// configure to only allow requests from certain origins
app.use(cors());

// secure express app
app.use(helmet({
  dnsPrefetchControl: false,
  frameguard: false,
  ieNoOpen: false
}));

// parsing the request bodys
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Error handling middleware, we delegate the handling to the centralized error handler
app.use(async (err, _req, res) => {
  await errorHandler.handleError(err, res);
});

// secure your private routes with jwt authentication middleware
// app.all('/private/*', (req, res, next) => auth(req, res, next));
app.use('/todos', todosRouter);

module.exports = app;
