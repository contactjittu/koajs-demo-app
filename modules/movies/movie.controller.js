'use strict';

const data = [
  {
    name: 'Coolie'
  }
]
exports.fineOne = ctx => {
  ctx.status = 200;
  ctx.body = data
};
