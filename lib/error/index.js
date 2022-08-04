/* lib/error/index.js */

class AppError {
  constructor(commonType, description, isOperational) {
    Error.call(this);
    Error.captureStackTrace(this);
    this.commonType = commonType;
    this.description = description;
    this.isOperational = isOperational;
  }
}

module.exports = AppError;
