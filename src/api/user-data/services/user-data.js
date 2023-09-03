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
                        user: {
                            id: user_permisionId,
                        }
                    },
                    populate: populate,
                }
            )

            return entries.length > 0 ? entries[0] : null;
        } catch (err) {
            return err;
        }
    }
}));
