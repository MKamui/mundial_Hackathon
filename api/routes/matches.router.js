const express = require('express');
const { Match } = require('../models');

const router = express.Router();

router.post('/matches', async (req, res) => {
  await Match.findAll();
});

module.exports = router;