'use strict';

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::location.location', ({ strapi }) => ({
  getLocationById: async (locationId, populate) => {
    try {
      const entries = await strapi.entityService.findOne(
        "api::location.location",
        locationId,
        {
          populate: populate,

        }
      )

      return entries;
    } catch (err) {
      return err;
    }
  },
  getLocationsCities: async () => {
    try {
      const entries = await strapi.entityService.findMany(
        "api::location.location",
        {
          populate: 'city',
        }
      )

      const cities = new Set();

      entries.map(element => {
        cities.add(element.city)
      });
      return Array.from(cities);
    } catch (err) {
      return err;
    }
  }
}));
