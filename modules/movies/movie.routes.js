'use strict';

const controller = require('./movie.controller');

module.exports = Router => {
  const router = new Router({
    prefix: '/movie',
  });

  router.get('/', controller.fineOne);

  return router;
};
