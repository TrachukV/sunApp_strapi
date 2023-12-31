'use strict';

/**
 * review service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::review.review', ({ strapi }) => ({
    getReviewById: async (reviewId, populate) => {
        try {
            const data = await strapi.entityService.findOne(
                "api::review.review",
                reviewId,
                {
                    populate: populate,

                }
            )

            const transformedData = {
                data: {
                    id: data.id,
                    attributes: {
                        description: data.description,
                        createdAt: data.createdAt,
                        updatedAt: data.updatedAt,
                        publishedAt: data.publishedAt,
                        mark: data.mark,
                        user: {
                            data: {
                                id: data.user.id,
                                attributes: {
                                }
                            }
                        }
                    },
                },
                meta: {},
            };

            return transformedData;
        } catch (err) {
            return err;
        }
    },
    getReviewRating: async (locationId,) => {
        try {
            const entries = await strapi.entityService.findMany(
                "api::review.review",
                {
                    filters: {
                        location: locationId
                    }

                }
            )

            const reviewCount = entries.length;
            var mark = 0;
            entries.map(element => {
                mark += element.mark;
            });


            return {
                count: reviewCount,
                mark: mark / reviewCount
            };
        } catch (err) {
            return err;
        }
    },
    isUserRateLocation: async (userId, locationId) => {
        try {
            const orders = await strapi.entityService.findMany(
                "api::order.order",
                {
                    filters: {
                        user: userId,
                        location: locationId
                    }
                }
            )

            if (orders.length == 0) {
                throw new Error('Order not found');
            }

            const reviews = await strapi.entityService.findMany(
                "api::review.review",
                {
                    filters: {
                        user: userId,
                        location: locationId
                    }
                }
            )

            return reviews.length > 0;
        } catch (err) {
            return err;
        }
    }
}));
