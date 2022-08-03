/* eslint-disable comma-dangle */
/* lib/logger/index.js */

const log4js = require('log4js');

const DEFAULTS = require('./default.json');

const level = process.env.LOG_LEVEL ?? DEFAULTS.LOG_LEVEL;

log4js.configure({
  appenders: {
    api: {
      type: 'stdout',
    }
  },
  categories: { default: { appenders: ['api'], level } }
});

const logger = log4js.getLogger();

const changeLogLevel = (nlevel) => {
  if (DEFAULTS.ALLOWED_LEVELS.indexOf(nlevel) < 0) {
    logger.warn(`Invalid log level ${nlevel}.`);
  } else {
    logger.level = nlevel;
  }
};

module.exports = {
  logger,
  changeLogLevel
};
