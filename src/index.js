const express = require('express');
const server = express();
const PORT = process.env.PORT || 4500;
const getPokemonByName = require('./data/models/pokemon');

server.use(express.json());

server.get('/:name', async (req, res) => {
  const { name } = req.params;
  console.log(name);
  try {
    const pokemon = await getPokemonByName('Pikachu');
    console.log(pokemon);
  } catch (e) {
    console.log(e);
  }
});

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
