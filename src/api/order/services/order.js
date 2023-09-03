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
                    id: data.data.id,
                    attributes: {
                        location: {
                            data: {
                                id: data.data.attributes.location.data.id,
                                attributes: {
                                    name: data.data.attributes.location.data.attributes.name,
                                    description: data.data.attributes.location.data.attributes.description,
                                    images: {
                                        data: data.data.attributes.location.data.attributes.images.data.map(image => ({
                                            id: image.id,
                                            attributes: {
                                                name: image.attributes.name,
                                                alternativeText: image.attributes.alternativeText,
                                                caption: image.attributes.caption,
                                                width: image.attributes.width,
                                                height: image.attributes.height,
                                                formats: image.attributes.formats,
                                                hash: image.attributes.hash,
                                                ext: image.attributes.ext,
                                                mime: image.attributes.mime,
                                                size: image.attributes.size,
                                                url: image.attributes.url,
                                                previewUrl: image.attributes.previewUrl,
                                                provider: image.attributes.provider,
                                                provider_metadata: image.attributes.provider_metadata,
                                            },
                                        })),
                                    },
                                    video: data.data.attributes.location.data.attributes.video,
                                    price: data.data.attributes.location.data.attributes.price,
                                    cocktails: data.data.attributes.location.data.attributes.cocktails,
                                    code: data.data.attributes.location.data.attributes.code,
                                    address: data.data.attributes.location.data.attributes.address,
                                    city: data.data.attributes.location.data.attributes.city,
                                    createdAt: data.data.attributes.location.data.attributes.createdAt,
                                    updatedAt: data.data.attributes.location.data.attributes.updatedAt,
                                    publishedAt: data.data.attributes.location.data.attributes.publishedAt,
                                },
                            },
                        },
                        reservationDate: data.data.attributes.reservationDate,
                        seatsCount: data.data.attributes.seatsCount,
                        beachLine: data.data.attributes.beachLine,
                        price: data.data.attributes.price,
                        createdAt: data.data.attributes.createdAt,
                        updatedAt: data.data.attributes.updatedAt,
                        publishedAt: data.data.attributes.publishedAt,
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

