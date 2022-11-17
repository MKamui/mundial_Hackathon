const express = require('express');

const { User, Team, Vote } = require('../models/index');

const router = express.Router();


router.get('/', async (req, res) => {

  const users = await User.findAll({
    include: [Team]
  }).then((res) => {
    console.log(res);
  });






  // console.log(votes); // true


  // res.json(votes);
  //const userTest = userModel.findAll();
});


module.exports = router;
