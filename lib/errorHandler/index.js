/* lib/errorHandler/index.js */
const { logger } = require('../logger');

function ErrorHandler() {
  this.handleError = async (error /* ,responseStream */) => {
    logger.error(error);
    // await logger.logError(error);
    // await fireMonitoringMetric(error);
    // await crashIfUntrustedErrorOrSendResponse(error, responseStream);
  };

  this.isTrustedError = (error) => error.isOperational;
}

module.exports = new ErrorHandler();
