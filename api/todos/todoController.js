/* api/todos/todoController.js */
const AppError = require('../../lib/error');

exports.list = (req, res, next) => {
  // throw new AppError('not implemented', 'not implemented', 'further explanation', true);

  next(new AppError('not implemented', 'not implemented', 'further explanation', true));
};
