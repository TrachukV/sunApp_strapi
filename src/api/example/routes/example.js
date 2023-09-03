module.exports = {
  routes: [
    {
     method: 'GET',
     path: '/example',
     handler: 'example.exampleAction',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
