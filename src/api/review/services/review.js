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

            return entries;
        } catch (err) {
            return err;
        }
    }
}));
