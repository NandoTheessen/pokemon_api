// Dependencies
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const getAbilities = require('./controllers/Abilities');
const server = express();

// Middleware
server.use(express.json());
server.use(helmet());
server.use(cors());
server.use(morgan('dev'));

server.route('/').get((req, res) => {
  res.status(200).json({
    message:
      'Use the /api/{yourPokemonName} endpoint to query pokemon abilities! 🙂'
  });
});
server.route('/api/:name').get(getAbilities);

module.exports = server;
