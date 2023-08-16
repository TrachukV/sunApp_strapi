'use strict';

/**
 * sun-bed service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::sun-bed.sun-bed');
