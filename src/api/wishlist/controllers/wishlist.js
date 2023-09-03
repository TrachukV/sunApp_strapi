'use strict';

/**
 * wishlist controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::wishlist.wishlist', ({ strapi }) => ({
    getWishlistById: async (ctx, next) => {
        const { id, } = ctx.params;
        const { populate } = ctx.query;
        try {
            const data = await strapi
                .service('api::wishlist.wishlist')
                .getWishlistById(id, populate)

            ctx.body = data;
        } catch (error) {
            return error;
        }
    },
    addItemToWishlist: async (ctx, next) => {
        const { id, } = ctx.params;
        const locationId = ctx.request.body;
        try {
            const data = await strapi
                .service('api::wishlist.wishlist')
                .addItemToWishlist(id, locationId)

            ctx.body = data;
        } catch (error) {
            return error;
        }
    },
}));
