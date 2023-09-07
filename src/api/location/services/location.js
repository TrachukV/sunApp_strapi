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
            price: data.price,
            cocktails: data.cocktails,
            code: data.code,
            address: data.address,
            city: data.city,
            createdAt: data.createdAt,
            updatedAt: data.updatedAt,
            publishedAt: data.publishedAt,
            rating: {
              id: data.rating.id,
              mark: data.rating.mark,
              count: data.rating.count,
            },
            images: {
              data: data.images.map(image => ({
                id: image.id,
                attributes: {
                  name: image.name,
                  size: image.size,
                  url: image.url,
                  previewUrl: image.previewUrl,
                  provider: image.provider,
                  provider_metadata: image.provider_metadata,
                  folderPath: image.folderPath,
                  createdAt: image.createdAt,
                  updatedAt: image.createdAt,
                }
              })
              )
            },
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
  },
  getLocationCrowdiness: async (locationId) => {
    try {
      const data = await strapi.entityService.findMany(
        "api::order.order",
        {
          filters: {
            location: locationId,
          },
          populate: '*',
        }
      )

      const hourCounts = Array(8).fill(0);

      for (const reservation of data) {
        const hour = new Date(reservation.reservationDate).getHours();

        if (hour >= 12 && hour <= 19) {

          const slot = hour;

          hourCounts[slot - 12]++;
        }
      }

      return hourCounts;
    } catch (err) {
      return err;
    }
  },
}));
