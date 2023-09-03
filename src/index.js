'use strict';

module.exports = {
  register({ strapi }) {
    if (strapi.plugin('documentation')) {
      const override = {
        info: { version: '1.0.0' },
        paths: {
          "/location/getLocationById/{id}": {
            "get": {
              "responses": {
                "200": {
                  "description": "OK",
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/LocationResponse"
                      }
                    }
                  }
                },
                "400": {
                  "description": "Bad Request",
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/Error"
                      }
                    }
                  }
                },
                "401": {
                  "description": "Unauthorized",
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/Error"
                      }
                    }
                  }
                },
                "403": {
                  "description": "Forbidden",
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/Error"
                      }
                    }
                  }
                },
                "404": {
                  "description": "Not Found",
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/Error"
                      }
                    }
                  }
                },
                "500": {
                  "description": "Internal Server Error",
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/Error"
                      }
                    }
                  }
                }
              },
              "tags": [
                "Location"
              ],
              "parameters": [
                {
                  "name": "id",
                  "in": "path",
                  "description": "",
                  "deprecated": false,
                  "required": true,
                  "schema": {
                    "type": "number"
                  }
                },
                {
                  "name": "populate",
                  "in": "query",
                  "description": "Relations to return",
                  "deprecated": false,
                  "required": false,
                  "schema": {
                    "type": "string"
                  }
                },
              ],
              "operationId": "get/location/getLocationById/{id}"
            },
          },
          "/location/getLocationsCities": {
            "get": {
              "responses": {
                "200": {
                  "description": "OK",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "cities": {
                            "type": "array",
                            "items": {
                              "type": "string"
                            }
                          },
                        }
                      }
                    }
                  }
                },
                "400": {
                  "description": "Bad Request",
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/Error"
                      }
                    }
                  }
                },
                "401": {
                  "description": "Unauthorized",
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/Error"
                      }
                    }
                  }
                },
                "403": {
                  "description": "Forbidden",
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/Error"
                      }
                    }
                  }
                },
                "404": {
                  "description": "Not Found",
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/Error"
                      }
                    }
                  }
                },
                "500": {
                  "description": "Internal Server Error",
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/Error"
                      }
                    }
                  }
                }
              },
              "tags": [
                "Location"
              ],
              "operationId": "get/location/getLocationsCities"
            },
          },
          "/order/getOrderById/{id}": {
            "get": {
              "responses": {
                "200": {
                  "description": "OK",
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/OrderResponse"
                      }
                    }
                  }
                },
                "400": {
                  "description": "Bad Request",
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/Error"
                      }
                    }
                  }
                },
                "401": {
                  "description": "Unauthorized",
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/Error"
                      }
                    }
                  }
                },
                "403": {
                  "description": "Forbidden",
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/Error"
                      }
                    }
                  }
                },
                "404": {
                  "description": "Not Found",
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/Error"
                      }
                    }
                  }
                },
                "500": {
                  "description": "Internal Server Error",
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/Error"
                      }
                    }
                  }
                }
              },
              "tags": [
                "Order"
              ],
              "parameters": [
                {
                  "name": "id",
                  "in": "path",
                  "description": "",
                  "deprecated": false,
                  "required": true,
                  "schema": {
                    "type": "number"
                  }
                },
                {
                  "name": "populate",
                  "in": "query",
                  "description": "Relations to return",
                  "deprecated": false,
                  "required": false,
                  "schema": {
                    "type": "string"
                  }
                },
              ],
              "operationId": "get/order/getOrderById/{id}"
            },
          },
          "/orders/getUserOrdersLocations/{id}": {
            "get": {
              "responses": {
                "200": {
                  "description": "OK",
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/LocationListResponse"
                      }
                    }
                  }
                },
                "400": {
                  "description": "Bad Request",
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/Error"
                      }
                    }
                  }
                },
                "401": {
                  "description": "Unauthorized",
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/Error"
                      }
                    }
                  }
                },
                "403": {
                  "description": "Forbidden",
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/Error"
                      }
                    }
                  }
                },
                "404": {
                  "description": "Not Found",
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/Error"
                      }
                    }
                  }
                },
                "500": {
                  "description": "Internal Server Error",
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/Error"
                      }
                    }
                  }
                }
              },
              "tags": [
                "Order"
              ],
              "parameters": [
                {
                  "name": "id",
                  "in": "path",
                  "description": "",
                  "deprecated": false,
                  "required": true,
                  "schema": {
                    "type": "number"
                  }
                },
              ],
              "operationId": "get//orders/getUserOrdersLocations/{id}"
            },
          },
          "/review/getReviewById/{id}": {
            "get": {
              "responses": {
                "200": {
                  "description": "OK",
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/ReviewResponse"
                      }
                    }
                  }
                },
                "400": {
                  "description": "Bad Request",
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/Error"
                      }
                    }
                  }
                },
                "401": {
                  "description": "Unauthorized",
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/Error"
                      }
                    }
                  }
                },
                "403": {
                  "description": "Forbidden",
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/Error"
                      }
                    }
                  }
                },
                "404": {
                  "description": "Not Found",
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/Error"
                      }
                    }
                  }
                },
                "500": {
                  "description": "Internal Server Error",
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/Error"
                      }
                    }
                  }
                }
              },
              "tags": [
                "Review"
              ],
              "parameters": [
                {
                  "name": "id",
                  "in": "path",
                  "description": "",
                  "deprecated": false,
                  "required": true,
                  "schema": {
                    "type": "number"
                  }
                },
                {
                  "name": "populate",
                  "in": "query",
                  "description": "Relations to return",
                  "deprecated": false,
                  "required": false,
                  "schema": {
                    "type": "string"
                  }
                },
              ],
              "operationId": "get/review/getReviewById/{id}"
            },
          },


          "/review/getReviewRating/{id}": {
            "get": {
              "responses": {
                "200": {
                  "description": "OK",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "rating": {
                            "type": "map",
                            "count": {
                              "type": "int",
                            },
                            "mark": {
                              "type": "double",
                            },
                          },
                        }
                      }
                    }
                  }
                },
                "400": {
                  "description": "Bad Request",
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/Error"
                      }
                    }
                  }
                },
                "401": {
                  "description": "Unauthorized",
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/Error"
                      }
                    }
                  }
                },
                "403": {
                  "description": "Forbidden",
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/Error"
                      }
                    }
                  }
                },
                "404": {
                  "description": "Not Found",
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/Error"
                      }
                    }
                  }
                },
                "500": {
                  "description": "Internal Server Error",
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/Error"
                      }
                    }
                  }
                }
              },
              "tags": [
                "Review"
              ],
              "parameters": [
                {
                  "name": "id",
                  "in": "path",
                  "description": "",
                  "deprecated": false,
                  "required": true,
                  "schema": {
                    "type": "number"
                  }
                },
              ],
              "operationId": "get/review/getReviewRating/{id}"
            },
          },



          "/user-data/getUserDataByUserId/{id}": {
            "get": {
              "responses": {
                "200": {
                  "description": "OK",
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/UserDataResponse"
                      }
                    }
                  }
                },
                "400": {
                  "description": "Bad Request",
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/Error"
                      }
                    }
                  }
                },
                "401": {
                  "description": "Unauthorized",
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/Error"
                      }
                    }
                  }
                },
                "403": {
                  "description": "Forbidden",
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/Error"
                      }
                    }
                  }
                },
                "404": {
                  "description": "Not Found",
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/Error"
                      }
                    }
                  }
                },
                "500": {
                  "description": "Internal Server Error",
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/Error"
                      }
                    }
                  }
                }
              },
              "tags": [
                "User-data"
              ],
              "parameters": [
                {
                  "name": "id",
                  "in": "path",
                  "description": "",
                  "deprecated": false,
                  "required": true,
                  "schema": {
                    "type": "number"
                  }
                },
                {
                  "name": "populate",
                  "in": "query",
                  "description": "Relations to return",
                  "deprecated": false,
                  "required": false,
                  "schema": {
                    "type": "string"
                  }
                },
              ],
              "operationId": "get/user-data/getUserDataByUserId/{id}"
            },
          },
          "/wishlist/getWishlistById/{id}": {
            "get": {
              "responses": {
                "200": {
                  "description": "OK",
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/WishlistResponse"
                      }
                    }
                  }
                },
                "400": {
                  "description": "Bad Request",
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/Error"
                      }
                    }
                  }
                },
                "401": {
                  "description": "Unauthorized",
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/Error"
                      }
                    }
                  }
                },
                "403": {
                  "description": "Forbidden",
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/Error"
                      }
                    }
                  }
                },
                "404": {
                  "description": "Not Found",
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/Error"
                      }
                    }
                  }
                },
                "500": {
                  "description": "Internal Server Error",
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/Error"
                      }
                    }
                  }
                }
              },
              "tags": [
                "Wishlist"
              ],
              "parameters": [
                {
                  "name": "id",
                  "in": "path",
                  "description": "",
                  "deprecated": false,
                  "required": true,
                  "schema": {
                    "type": "number"
                  }
                },
                {
                  "name": "populate",
                  "in": "query",
                  "description": "Relations to return",
                  "deprecated": false,
                  "required": false,
                  "schema": {
                    "type": "string"
                  }
                }
              ],
              "operationId": "get/wishlist/getWishlistById/{id}"
            },
          },
          "/wishlist/addItemToWishlist/{id}": {
            "put": {
              "responses": {
                "200": {
                  "description": "OK",
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/WishlistResponse"
                      }
                    }
                  }
                },
                "400": {
                  "description": "Bad Request",
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/Error"
                      }
                    }
                  }
                },
                "401": {
                  "description": "Unauthorized",
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/Error"
                      }
                    }
                  }
                },
                "403": {
                  "description": "Forbidden",
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/Error"
                      }
                    }
                  }
                },
                "404": {
                  "description": "Not Found",
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/Error"
                      }
                    }
                  }
                },
                "500": {
                  "description": "Internal Server Error",
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/Error"
                      }
                    }
                  }
                }
              },
              "tags": [
                "Wishlist"
              ],
              "parameters": [
                {
                  "name": "id",
                  "in": "path",
                  "description": "",
                  "deprecated": false,
                  "required": true,
                  "schema": {
                    "type": "number"
                  }
                }
              ],
              "operationId": "put/wishlist/addItemToWishlist/{id}",
              "requestBody": {
                "required": true,
                "content": {
                  "application/json": {
                    "schema": {
                      "type": "object",
                      "required": [
                        "locationId",
                      ],
                      "properties": {
                        "locationId": {
                          "type": "int"
                        },
                      }
                    },
                    "example": {
                      "locationId": 1
                    }
                  }
                }
              }
            },
          },
          "/users/{id}": {
            "put": {
              "tags": [
                "Users-Permissions - Users & Roles"
              ],
              "summary": "Update a user",
              "parameters": [
                {
                  "in": "path",
                  "name": "id",
                  "required": true,
                  "schema": {
                    "type": "string"
                  },
                  "description": "user Id"
                }
              ],
              "requestBody": {
                "required": true,
                "content": {
                  "application/json": {
                    "schema": {
                      "type": "object",
                      "required": [
                        "username",
                      ],
                      "properties": {
                        "email": {
                          "type": "string"
                        },
                      }
                    },
                    "example": {
                      "email": "foo@strapi.io"
                    }
                  }
                }
              },
              "responses": {
                "200": {
                  "description": "Returns updated user info",
                  "content": {
                    "application/json": {
                      "schema": {
                        "allOf": [
                          {
                            "$ref": "#/components/schemas/Users-Permissions-User"
                          },
                          {
                            "type": "object",
                            "properties": {
                              "role": {
                                "$ref": "#/components/schemas/Users-Permissions-Role"
                              }
                            }
                          }
                        ]
                      },
                      "example": {
                        "id": 1,
                        "username": "foo",
                        "email": "foo@strapi.io",
                        "provider": "local",
                        "confirmed": false,
                        "blocked": false,
                        "createdAt": "2022-05-19T17:35:35.096Z",
                        "updatedAt": "2022-05-19T17:35:35.096Z",
                        "role": {
                          "id": 1,
                          "name": "X",
                          "description": "Default role given to authenticated user.",
                          "type": "authenticated",
                          "createdAt": "2022-05-19T17:35:35.096Z",
                          "updatedAt": "2022-06-04T07:11:59.551Z"
                        }
                      }
                    }
                  }
                },
                "default": {
                  "description": "Error",
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/Error"
                      }
                    }
                  }
                }
              }
            },
          }
        }
      }
      strapi
        .plugin('documentation')
        .service('override')
        .registerOverride(override, {
        });
    }
  },

  bootstrap({ strapi }) {
  },
};