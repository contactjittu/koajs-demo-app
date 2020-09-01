'use strict';

const http = require('http');
const server = require('./server');
const config = require('./config');

async function bootstrap() {
  return http.createServer(server.callback()).listen(config.PORT);
}

bootstrap()
  .then(app =>
    console.log(`🚀 Server listening on port ${app.address().port}!`),
  )
  .catch(err => {
    setImmediate(() => {
      console.error('Unable to run the server because of the following error:');
      console.error(err);
      process.exit();
    });
  });
