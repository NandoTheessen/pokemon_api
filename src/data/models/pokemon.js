const db = require('../dbconfig');

async function getAbilitiesByName(name) {
  return db('pokemon')
    .where('pokemon.name', name.toLowerCase())
    .join('abilities', 'pokemon.id', '=', 'abilities.pokemon_id')
    .select(
      'pokemon.name',
      'abilities.name',
      'abilities.slot',
      'abilities.is_hidden',
      'abilities.url'
    );
}

async function addResponseToCache(name, abilities) {
  try {
    const id = await db('pokemon').insert({ name });
    const newAbilities = abilities.map(ability => {
      return {
        name: ability.ability.name,
        is_hidden: ability.is_hidden,
        pokemon_id: id[0],
        url: ability.ability.url,
        slot: ability.slot
      };
    });
    await db('abilities').insert(newAbilities);
    return id;
  } catch (error) {
    throw error;
  }
}

module.exports = { getAbilitiesByName, addResponseToCache };
