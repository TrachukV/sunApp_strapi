'use strict';

/**
 * order service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::order.order', ({ strapi }) => ({
    getOrderById: async (orderId, populate) => {
        try {
            const entries = await strapi.entityService.findOne(
                "api::order.order",
                orderId,
                {
                    populate: populate,

                }
            )
            return entries;
        } catch (err) {
            return err;
        }
    }
}));

