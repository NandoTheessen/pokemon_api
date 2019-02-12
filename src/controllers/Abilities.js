const PokemonModel = require('../data/models/pokemon');
const fetchData = require('../helpers/FetchData');

const API = process.env.API || 'https://pokeapi.co/api/v2/pokemon';

const getAbilities = async (req, res) => {
  try {
    const { name } = req.params;
    // Some input validation
    if (!name) {
      res.status(400).json({ message: 'Please name a pokemon!' });
    }

    // Determine if the abilities exist on cache
    let abilities = await PokemonModel.getAbilitiesByName(name);
    let fromCache = true;

    if (abilities.length === 0) {
      // Fetch from the API if abilities do not exist in cache
      fromCache = false;
      const pokemon = await fetchData(`${API}/${name.toLowerCase()}`);
      abilities = pokemon.abilities;
      PokemonModel.addResponseToCache(name, abilities);
    }

    res.status(200).json({ name: name, abilities, fromCache });
  } catch (e) {
    // Let the user know if they made an error inputting or if the API is failing
    const message =
      e.response.status === 404
        ? 'This pokemon does not exist ☹️'
        : 'There has been an error handling this request';
    res.status(e.response.status).json({ message });
  }
};

module.exports = getAbilities;
