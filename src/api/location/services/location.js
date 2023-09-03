'use strict';

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::location.location', ({ strapi }) => ({
  getLocationById: async (locationId, populate) => {
    try {
      const data = await strapi.entityService.findOne(
        "api::location.location",
        locationId,
        {
          populate: populate,

        }
      )

      const transformedResponse = {
        data: {
          id: data.id,
          attributes: {
            name: data.name,
            description: data.description,
            video: data.video,
            images: data.images,
            price: data.price,
            cocktails: data.cocktails,
            code: data.code,
            address: data.address,
            city: data.city,
            createdAt: data.createdAt,
            updatedAt: data.updatedAt,
            publishedAt: data.publishedAt,
          },
        },
        meta: {},
      };

      return transformedResponse;
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
