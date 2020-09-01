const Koa = require('koa');
const bodyParser = require('koa-bodyparser')();
const compress = require('koa-compress')();
const cors = require('@koa/cors')();
const helmet = require('koa-helmet')();
const logger = require('koa-logger')();

const errorHandler = require('./middleware/error.middleware');
const applyApiMiddleware = require('./modules');
const config = require('./config');

const server = new Koa();

/**
 * Add here only development middlewares
 */
if (config.isDevelopment) {
  server.use(logger);
}

/**
 * Pass to our server instance middlewares
 */
server
  .use(errorHandler)
  .use(helmet)
  .use(compress)
  .use(cors)
  .use(bodyParser);

/**
 * Apply to our server the api router
 */
applyApiMiddleware(server);

module.exports = server;
