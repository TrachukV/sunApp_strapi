'use strict';

/**
 * user-data controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::user-data.user-data', ({ strapi }) => ({
    getUserDataByUserId: async (ctx, next) => {
        const { id, } = ctx.params;
        const { populate } = ctx.query;
        try {
            const data = await strapi
                .service('api::user-data.user-data')
                .getUserDataByUserId(id, populate)

            ctx.body = data;
        } catch (error) {
            return error;
        }
    },

}));
