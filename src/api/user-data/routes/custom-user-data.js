'use strict';

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/user-data/getUserDataByUserId/:id",
      handler: "user-data.getUserDataByUserId"
    }
  ]
}