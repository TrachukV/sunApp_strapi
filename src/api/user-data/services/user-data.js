'use strict';

/**
 * user-data service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::user-data.user-data', ({ strapi }) => ({
    getUserDataByUserId: async (user_permisionId, populate) => {
        try {
            const entries = await strapi.entityService.findMany(
                "api::user-data.user-data",
                {
                    filters: {
                        user: user_permisionId,
                    },
                    populate: populate,
                }
            )

            const data = entries.length > 0 ? entries[0] : null;
            const transformedResponse = {
                data: {
                    id: data.id,
                    attributes: {
                        name: data.name,
                        lastName: data.lastName,
                        phoneNumber: data.phoneNumber,
                        image: data.image,
                        city: data.city,
                        firstName: data.firstName,
                        createdAt: data.createdAt,
                        updatedAt: data.updatedAt,
                        publishedAt: data.publishedAt,
                        user: data.user
                    },
                },
                meta: {},
            };

            return transformedResponse;
        } catch (err) {
            return err;
        }
    }
}));
