const fetchData = require('../../helpers/FetchData');

describe('fetchData helper', () => {
  test('should fetch data from a URL that is passed in', async () => {
    const data = await fetchData('https://pokeapi.co/api/v2/pokemon/pikachu');

    expect(data).toHaveProperty('name', 'pikachu');
  });
});
