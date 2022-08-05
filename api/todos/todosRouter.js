/* api/todos/router.js */
const express = require('express');

const todoController = require('./todosController');
const { logger } = require('../../lib/logger');

const router = express.Router();

// middleware that is specific to this router
router.use((_req, _res, next) => {
  logger.log('Todo middlewate time: ', Date.now());
  next();
});

router.get('/', todoController.list);

module.exports = router;
