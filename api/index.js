/* api/index.js */

const bodyParser = require('body-parser');
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const errorHandler = require('../lib/errorHandler');
// Routers
const todosRouter = require('./todos/todoRouter');

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

// secure your private routes with jwt authentication middleware
// app.all('/private/*', (req, res, next) => auth(req, res, next));
app.use('/todos', todosRouter);

// Error handling middleware, we delegate the handling to the centralized error handler
// eslint-disable-next-line no-unused-vars
app.use(async (err, req, res, next) => {
  // TODO: Better respond codes
  await errorHandler.handleError(err, res);
  res.sendStatus(503);
});

module.exports = app;
