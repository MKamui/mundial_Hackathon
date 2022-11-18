const express = require('express');

const validatorHandler = require('./../middlewares/validator.handler');
//Estos son los esquemas para validar los datos.
const { createProductSchema, updateProductSchema, getProductSchema } = require('./../schemas/product.schema');

const router = express.Router();

// Aqui va el modelo para conectar a la BD. Debo hacerlo con sequelize
// const service = new ProductsService();

//Esta es la ruta raíz, sería el controlador encargado de manejar a /api/teams
router.get('/', async (req, res) => {
  // const products = await service.find();
  // res.json(products);
});

router.get('/team-vs-team', async (req, res) => {

  const { team1, team2 } = req.query;

  // if (req.team1 == null || req.team2 == null || req.team1 == "" || req.team2 == "" ) {


  // }

  // res.json({
  //   team1,
  //   team2
  // })


  // const products = await service.find();
  // res.json(products);
});


// Estas son las subrutas que se desprenden de /api/teams
// Quedarían como /api/teams/filter, y así sucesivamente
router.get('/filter', (req, res) => {
  res.send('Yo soy un filter');
});

router.get('/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const product = await service.findOne(id);
      res.json(product);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createProductSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const newProduct = await service.create(body);
    res.status(201).json(newProduct);
  }
);

router.patch('/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const product = await service.update(id, body);
      res.json(product);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const rta = await service.delete(id);
  res.json(rta);
});

module.exports = router;