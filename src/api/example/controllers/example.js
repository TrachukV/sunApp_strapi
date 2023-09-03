'use strict';

/**
 * A set of functions called "actions" for `example`
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::location.location')

module.exports = {
  exampleAction: async (ctx, next) => {
    try {
      ctx.body = [{
        "description": "123",
        "count": 0,  
      },
      {
        "description": "321",
        "count": 2,  
      }
    ];
    } catch (err) {
      ctx.body = err;
    }
  }
};
