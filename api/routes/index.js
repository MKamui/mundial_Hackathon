const express = require('express');

const teamsRouter = require('./teams.router');
const votesRouter = require('./votes.router');
// const productsRouter = require('./products.router');
// const categoriesRouter = require('./categories.router');
const usersRouter = require('./users.router');

function routerApi(app) {
  const router = express.Router();

  app.use('/api/', router);

  // Registramos la ruta principal para conectar con la derivadas de esta.
  // En este caso, las derivadas están en teamsRouter.
  // Busque el archivo teamsRouter.js
  app.use('/teams', teamsRouter);
  app.use('/api/users', usersRouter);
  app.use('/votes', votesRouter);
  app.use('/matches', votesRouter);


  // router.use('/products', productsRouter);
  // router.use('/categories', categoriesRouter);
  // router.use('/users', usersRouter);



}

module.exports = routerApi;
