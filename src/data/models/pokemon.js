const db = require('../dbconfig');

async function getPokemonByName(name) {
  console.log(db('pokemon'));
  const query = db('pokemon')
    .where('name', name)
    .join('abilites', { 'pokemon.ability_1': 'abilites.ability_id' })
    .join('abilites', { 'pokemon.ability_2': 'abilites.ability_id' })
    .join('abilites', { 'pokemon.ability_3': 'abilites.ability_id' })
    .select(
      'pokemon.name',
      'ability_1.name',
      'ability_2.name',
      'ability_3.name'
    );

  return query;
}

module.exports = getPokemonByName;
