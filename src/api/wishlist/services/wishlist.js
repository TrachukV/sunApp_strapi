'use strict';

/**
 * wishlist service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::wishlist.wishlist', ({ strapi }) => ({
    getWishlistById: async (wishlistId, populate) => {
        try {
            const entries = await strapi.entityService.findOne(
                'api::wishlist.wishlist',
                wishlistId,
                {
                    populate: populate,

                }
            )

            return entries;
        } catch (err) {
            return err;
        }
    },
    addItemToWishlist: async (wishlistId, locationId) => {
        try {
            const location = await strapi.entityService.findOne(
                "api::location.location",
                locationId['locationId'],
                {
                    populate: '*',
                },
            )
            const newWishlistItem = await strapi.entityService.create(
                "api::wishlist-item.wishlist-item",
                {
                    data: {
                        location,
                        publishedAt: new Date().getTime(),
                    },
                },
            );
            const wishlist = await strapi.entityService.findOne(
                "api::wishlist.wishlist",
                wishlistId,
                {
                    populate: '*',
                },
            );
            if (!wishlist) {
                throw new Error('Wishlist not found');
            }
            wishlist.wishlistItems.push(newWishlistItem);
            const updatedWishlist = await strapi.entityService
                .update(
                    "api::wishlist.wishlist",
                    wishlistId,
                    {
                        data: {
                            wishlistItems: wishlist.wishlistItems,
                        },
                        populate: 'wishlistItems',
                    }

                );

            return updatedWishlist;
        } catch (err) {
            return err;
        }
    }
}));
