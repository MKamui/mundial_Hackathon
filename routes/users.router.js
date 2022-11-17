const express = require('express');

const { User, Team, Vote } = require('../models/index');

const router = express.Router();


router.get('/', async (req, res) => {

  // const users = await User.findAll();

  // console.log(users.every(user => user instanceof User)); // true

  const votes = User.belongsToMany(Team, {
    through: 'Vote',
    foreignKey: 'user_id',
    otherKey: 'team_id'
  });



  // console.log(votes); // true


  res.send(votes);
  //const userTest = userModel.findAll();
});


module.exports = router;
