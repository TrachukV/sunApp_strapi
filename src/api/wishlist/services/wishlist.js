'use strict';

/**
 * wishlist service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::wishlist.wishlist', ({ strapi }) => ({
    getWishlistByUserId: async (userId, populate) => {
        try {
            const entries = await strapi.entityService.findMany(
                'api::wishlist.wishlist',
                {
                    filters: {
                        user: userId,
                    },
                    populate: populate,

                }
            )

            const data = entries[0];
            const transformedResponse = {
                data: {
                    id: data.id,
                    attributes: {
                        wishlistItems: {
                            data: data.wishlistItems.map(item => ({
                                id: item.id,
                                attributes: {
                                    location: {
                                        data:
                                        {
                                            id: item.location.id,
                                            attributes: {
                                                name: item.location.name,
                                                description: item.location.description,
                                                images: {
                                                    data: [
                                                        {
                                                            id: item.location.images[0].id,
                                                            attributes: {
                                                                name: item.location.images[0].name,
                                                                size: item.location.images[0].size,
                                                                url: item.location.images[0].url,
                                                                previewUrl: item.location.images[0].previewUrl,
                                                                provider: item.location.images[0].provider,
                                                                provider_metadata: item.location.images[0].provider_metadata,
                                                                folderPath: item.location.images[0].folderPath,
                                                                createdAt: item.location.images[0].createdAt,
                                                                updatedAt: item.location.images[0].createdAt,
                                                            }
                                                        }
                                                    ]
                                                }
                                            }
                                        }

                                    },
                                    createdAt: item.createdAt,
                                    updatedAt: item.createdAt,
                                }
                            }))
                        }
                    },
                },
                meta: {},
            };



            return transformedResponse;
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
