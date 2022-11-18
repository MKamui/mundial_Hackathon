const Joi = require('joi');

const teamId = Joi.integer();
const userId = Joi.integer();

const createVoteSchema = Joi.object({
  teamId: teamId.required(),
  userId: userId.required(),
});


// const getProductSchema = Joi.object({
//   id: id.required(),
// });

module.exports = { createVoteSchema,}
