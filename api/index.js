/* api/index.js */

const bodyParser = require('body-parser');
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
// const mapRoutes = require('express-routes-mapper');

// Load routers here
const todosRouter = require('./todos/router');

/**
 * server configuration
 */
// const config = require('../config');
// const dbService = require('./services/db.service');
// const auth = require('../auth.policy');

// environment: development, staging, testing, production
// const environment = process.env.NODE_ENV;

const app = express();
// const mappedOpenRoutes = mapRoutes(config.publicRoutes, 'api/controllers/');
// const mappedAuthRoutes = mapRoutes(config.privateRoutes, 'api/controllers/');
// const DB = dbService(environment, config.migrate).start();

// allow cross origin requests
// configure to only allow requests from certain origins
app.use(cors());

// secure express app
app.use(helmet({
  dnsPrefetchControl: false,
  frameguard: false,
  ieNoOpen: false,
}));

// parsing the request bodys
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/todos', todosRouter);

app.get('/', (req, res) => {
  res.send('hello world');
});

// secure your private routes with jwt authentication middleware
// app.all('/private/*', (req, res, next) => auth(req, res, next));

// // fill routes for express application
// app.use('/public', mappedOpenRoutes);
// app.use('/private', mappedAuthRoutes);

module.exports = app;
