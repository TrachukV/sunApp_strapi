'use strict';

/**
 * review controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::review.review', ({ strapi }) => ({
    getReviewById: async (ctx, next) => {
        const { id, } = ctx.params;
        const { populate } = ctx.query;
        try {
            const data = await strapi
                .service('api::review.review')
                .getReviewById(id, populate)

            ctx.body = data;
        } catch (error) {
            return error;
        }
    },
    getReviewRating: async (ctx, next) => {
        const { id, } = ctx.params;
        try {
            const data = await strapi
                .service('api::review.review')
                .getReviewRating(id)

            ctx.body = data;
        } catch (error) {
            return error;
        }
    },

}));
