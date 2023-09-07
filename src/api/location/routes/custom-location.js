'use strict';

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/location/getLocationById/:id",
      handler: "location.getLocationById"
    },
    {
      method: "GET",
      path: "/location/getLocationsCities",
      handler: "location.getLocationsCities"
    },
    {
      method: "GET",
      path: "/location/getLocationCrowdiness/:id",
      handler: "location.getLocationCrowdiness"
    }
  ]
}