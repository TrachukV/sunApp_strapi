'use strict';

module.exports = {
    routes: [
        {
            method: "GET",
            path: "/wishlist/getWishlistById/:id",
            handler: "wishlist.getWishlistById"
        },
        {
            method: "PUT",
            path: "/wishlist/addItemToWishlist/:id",
            handler: "wishlist.addItemToWishlist"
        }
    ]
}