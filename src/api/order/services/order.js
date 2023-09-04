'use strict';

/**
 * order service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::order.order', ({ strapi }) => ({
    getOrderById: async (orderId, populate) => {
        try {
            const data = await strapi.entityService.findOne(
                "api::order.order",
                orderId,
                {
                    populate: populate,

                }
            )

            const transformedResponse = {
                data: {
                    id: data.id,
                    attributes: {
                        location: {
                            data: {
                                id: data.location.id,
                                attributes: {
                                    name: data.location.name,
                                    description: data.location.description,
                                    images: {
                                        data: data.location.images.map(image => ({
                                            id: image.id,
                                            attributes: {
                                                name: image.name,
                                                alternativeText: image.alternativeText,
                                                caption: image.caption,
                                                width: image.width,
                                                height: image.height,
                                                formats: image.formats,
                                                hash: image.hash,
                                                ext: image.ext,
                                                mime: image.mime,
                                                size: image.size,
                                                url: image.url,
                                                previewUrl: image.previewUrl,
                                                provider: image.provider,
                                                provider_metadata: image.provider_metadata,
                                            },
                                        })),
                                    },
                                    rating: {
                                        id: data.location.rating.id,
                                        mark: data.location.rating.mark,
                                        count: data.location.rating.count
                                    },
                                    video: data.location.video,
                                    price: data.location.price,
                                    cocktails: data.location.cocktails,
                                    code: data.location.code,
                                    address: data.location.address,
                                    city: data.location.city,
                                    createdAt: data.location.createdAt,
                                    updatedAt: data.location.updatedAt,
                                    publishedAt: data.location.publishedAt,
                                },
                            },
                        },
                        reservationDate: data.reservationDate,
                        seatsCount: data.seatsCount,
                        beachLine: data.beachLine,
                        price: data.price,
                        createdAt: data.createdAt,
                        updatedAt: data.updatedAt,
                        publishedAt: data.publishedAt,
                    },
                },
                meta: data.meta,
            };

            return transformedResponse;
        } catch (err) {
            return err;
        }
    },
    getUserOrdersLocations: async (id) => {
        try {
            const entries = await strapi.entityService.findMany(
                "api::order.order",
                {
                    filters: {
                        user: id
                    },
                    populate: 'location.images',

                }
            )

            const transformedData = {
                data: entries.map(item => ({
                    id: item['location'].id,
                    attributes: {
                        name: item['location'].name,
                        description: item['location'].description,
                        images: {
                            data: item['location'].images.map(image => ({
                                id: image.id,
                                attributes: {
                                    name: image.name,
                                    alternativeText: image.alternativeText,
                                    caption: image.caption,
                                    width: image.width,
                                    height: image.height,
                                    formats: image.formats,
                                    hash: image.hash,
                                    ext: image.ext,
                                    mime: image.mime,
                                    size: image.size,
                                    url: image.url,
                                    previewUrl: image.previewUrl,
                                    provider: image.provider,
                                    provider_metadata: image.provider_metadata,
                                },
                            })),
                        },
                        price: item['location'].price,
                        code: item['location'].code,
                        address: item['location'].address,
                        city: item['location'].city,
                        createdAt: item['location'].createdAt,
                        updatedAt: item['location'].updatedAt,
                        publishedAt: item['location'].publishedAt,
                    },
                })),
                meta: entries.meta,
            };


            return transformedData;
        } catch (err) {
            return err;
        }
    }
}));

