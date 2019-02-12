const knex = require('knex');
const knexConfig = require('../knexfile');

const environment = process.env.NODE_ENV;

module.exports = {
  db: knex(knexConfig[environment])
};
