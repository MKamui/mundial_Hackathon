const express = require('express');

const teamsRouter = require('./teams.router');

// const productsRouter = require('./products.router');
// const categoriesRouter = require('./categories.router');
// const usersRouter = require('./users.router');

function routerApi(app) {
  const router = express.Router();

  app.use('/api/', router);

  // Registramos la ruta principal para conectar con la derivadas de esta.
  // En este caso, las derivadas están en teamsRouter.
  // Busque el archivo teamsRouter.js
  app.use('/api/teams', teamsRouter);


  // router.use('/products', productsRouter);
  // router.use('/categories', categoriesRouter);
  // router.use('/users', usersRouter);



}

module.exports = routerApi;
