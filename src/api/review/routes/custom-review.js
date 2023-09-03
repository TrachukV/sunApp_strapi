'use strict';

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/review/getReviewById/:id",
      handler: "review.getReviewById"
    }
  ]
}