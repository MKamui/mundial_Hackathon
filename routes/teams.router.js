const express = require('express');

const { Team, Match, Vote } = require('../models');


const validatorHandler = require('./../middlewares/validator.handler');
//Estos son los esquemas para validar los datos.
const { createProductSchema, updateProductSchema, getProductSchema } = require('./../schemas/product.schema');

const router = express.Router();

// Aqui va el modelo para conectar a la BD. Debo hacerlo con sequelize
// const service = new ProductsService();

//Esta es la ruta raíz, sería el controlador encargado de manejar a /api/teams
router.get('/', async (req, res) => {

  await Team.findAll()
          .then(data => {

            res.json({
                "status":200,
                "message":"Equipos",

                "data":{
                    "teams":data,
                }

              })

          });

});

router.get('/games-of-this-team', async (req, res) => {

  const { id } = req.query;

  let matchesAsHost = await Match.findAll({ where: { home: id } });
  let matchesAsVisitor = await Match.findAll({ where: { visitor: id } });

  res.json({
      "status":200,
      "message":"Estos son los partidos de este equipo",

      "data":{
          "matches":{
            matchesAsHost,
            matchesAsVisitor
          }
      },
  });
});

router.get('/team-vs-team', async (req, res) => {

  const { team1, team2 } = req.query;

  let votesForTeam1 = await Vote.findAndCountAll({where:{ team_id:team1 }})
  let votesForTeam2 = await Vote.findAndCountAll({where:{ team_id:team2 }})

  res.json({

    votesForTeam1,
    votesForTeam2

  })

});


// Estas son las subrutas que se desprenden de /api/teams
// Quedarían como /api/teams/filter, y así sucesivamente
router.get('/filter', (req, res) => {
  res.send('Yo soy un filter');
});

router.get('/:id', async (req, res)=>{
  const { id } = req.params;
  await Team.findByPk(id)
  .then(data => {

    res.json({
        "status":200,
        "message":"Equipo",

        "data":{
            "team":data,
        }

      })

  });
});

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
