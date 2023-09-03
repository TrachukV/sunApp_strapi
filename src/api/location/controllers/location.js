'use strict';

/**
 * location controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::location.location', ({ strapi }) => ({
    getLocationById: async (ctx, next) => {
        const { id, } = ctx.params;
        const { populate } = ctx.query;
        try {
            const data = await strapi
                .service('api::location.location')
                .getLocationById(id, populate)

            ctx.body = data;
        } catch (error) {
            return error;
        }
    },
    getLocationsCities: async (ctx, next) => {
        try {
            const data = await strapi
                .service('api::location.location')
                .getLocationsCities()

            ctx.body = data;
        } catch (error) {
            return error;
        }
    },
}));
