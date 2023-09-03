'use strict';

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/review/getReviewById/:id",
      handler: "review.getReviewById"
    },
    {
      method: "GET",
      path: "/review/getReviewRating/:id",
      handler: "review.getReviewRating"
    }
  ]
}