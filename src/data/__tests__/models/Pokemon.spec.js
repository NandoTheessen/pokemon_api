const model = require('../../models/pokemon');
const testDB = require('../../dbconfig');

beforeAll(async () => {
  await testDB.migrate.rollback();
  await testDB.migrate.latest();
  await testDB('pokemon').insert({ name: 'raichu' });
  await testDB('abilities').insert([
    {
      name: 'lightning-rod',
      is_hidden: true,
      pokemon_id: 1,
      url: 'https://pokeapi.co/api/v2/ability/31/',
      slot: 3
    },
    {
      name: 'static',
      pokemon_id: 1,
      url: 'https://pokeapi.co/api/v2/ability/9/',
      slot: 1
    }
  ]);
});

describe('getAbilitiesByName', () => {
  test('should return empty array when looking for pokemon that is not on cache', async () => {
    const abilities = await model.getAbilitiesByName('Bisasam');
    expect(abilities).toHaveLength(0);
  });

  test('should return array with 2 arrays for an existing pokemon', async () => {
    const abilities = await model.getAbilitiesByName('Raichu');
    expect(abilities).toHaveLength(2);
    expect(abilities[0]).toHaveProperty('name', 'lightning-rod');
    expect(abilities[1]).toHaveProperty('name', 'static');
  });
});

describe('addResponseToCache', () => {
  test('should insert data into the database and return an array containing the pokemon id (2)', async () => {
    const id = await model.addResponseToCache('Pikachu', [
      {
        ability: {
          name: 'lightning-rod',
          url: 'https://pokeapi.co/api/v2/ability/31/'
        },
        is_hidden: true,
        pokemon_id: 1,

        slot: 3
      },
      {
        ability: {
          name: 'static',
          url: 'https://pokeapi.co/api/v2/ability/9/'
        },
        pokemon_id: 1,
        slot: 1
      }
    ]);
    expect(id[0]).toBe(2);
  });
});
