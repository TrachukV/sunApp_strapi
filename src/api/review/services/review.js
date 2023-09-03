'use strict';

/**
 * review service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::review.review', ({ strapi }) => ({
    getReviewById: async (reviewId, populate) => {
        try {
            const entries = await strapi.entityService.findOne(
                "api::review.review",
                reviewId,
                {
                    populate: populate,

                }
            )

            const transformedData = {
                data: {
                    id: entries.id,
                    attributes: {
                        description: entries.description,
                        createdAt: entries.createdAt,
                        updatedAt: entries.updatedAt,
                        publishedAt: entries.publishedAt,
                        mark: entries.mark,
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
    }
}));
