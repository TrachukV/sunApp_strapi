'use strict';

module.exports = {
    routes: [
        {
            method: "GET",
            path: "/wishlist/getWishlistByUserId/:id",
            handler: "wishlist.getWishlistByUserId"
        },
        {
            method: "PUT",
            path: "/wishlist/addItemToWishlist/:id",
            handler: "wishlist.addItemToWishlist"
        }
    ]
}