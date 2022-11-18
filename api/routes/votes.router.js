const express = require('express');

// const { User, Team, Vote } = require('../models/index');
const { Vote } = require('../models');

const router = express.Router();


router.post('/', async (req, res) => {

  const { data } = req.body;
  const {teamId, userId} = data;

   try {


     await Vote.create({
       team_id: teamId,
       user_id: userId
     });

     res.json({
         "status":200,
         "message":"Voto recibido correctamente",

         "data":{
           data,
         }

       })

   } catch (error) {

     res.json({
         "status": 400,
         "message": "ha habido un error",

         "data":{
           "error": error
         }

       })

   }


});


module.exports = router;
