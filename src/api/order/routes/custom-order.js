'use strict';

module.exports = {
    routes: [
        {
            method: "GET",
            path: "/order/getOrderById/:id",
            handler: "order.getOrderById"
        }
    ]
}