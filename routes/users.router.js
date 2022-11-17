const express = require('express');

const { User } = require('../models/index');

const router = express.Router();


router.get('/', async (req, res) => {

  const users = await User.findAll();
  console.log(users.every(user => user instanceof User)); // true

  res.send(users);
  //const userTest = userModel.findAll();
});


module.exports = router;
