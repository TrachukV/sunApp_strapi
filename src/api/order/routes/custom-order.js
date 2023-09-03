'use strict';

module.exports = {
    routes: [
        {
            method: "GET",
            path: "/order/getOrderById/:id",
            handler: "order.getOrderById"
        },
        {
            method: "GET",
            path: "/orders/getUserOrdersLocations/:id",
            handler: "order.getUserOrdersLocations"
        }
    ]
}