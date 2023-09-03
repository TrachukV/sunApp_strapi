'use strict';

/**
 * order controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order.order', ({ strapi }) => ({
    getOrderById: async (ctx, next) => {
        const { id, } = ctx.params;
        const { populate } = ctx.query;
        try {
            const data = await strapi
                .service('api::order.order')
                .getOrderById(id, populate)

            ctx.body = data;
        } catch (error) {
            return error;
        }
    },

}));
