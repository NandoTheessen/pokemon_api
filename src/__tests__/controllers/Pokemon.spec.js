const request = require('supertest');
const testDB = require('../../data/dbconfig');
const server = require('../../server');

// beforeAll(async () => {});

describe('API returns correct responses when queried', () => {
  test('should return usage message at the root endpoint', async done => {
    request(server)
      .get('/')
      .expect(200, done);
  });

  test('should return pokemon data at /api/pokemon/${name} endpoint', done => {
    request(server)
      .get('/api/ditto/')
      .then(({ body }) => {
        expect(body).toHaveProperty('name', 'ditto');
        expect(body.abilities).toHaveLength(2);
        expect(body.fromCache).toBeFalsy();
        done();
      });
  });

  test('should grab consecutive requests from cache', done => {
    request(server)
      .get('/api/ditto/')
      .then(({ body }) => {
        expect(body).toHaveProperty('name', 'ditto');
        expect(body).not.toHaveProperty('random', 'true');
        expect(body.abilities).toHaveLength(2);
        expect(body.fromCache).toBeTruthy();
        done();
      });
  });
  test('should return 404 & message if pokemon does not exist', () => {
    request(server)
      .get('/api/randomThing/')
      .expect(404)
      .then(({ body }) => {
        expect(body).toHaveProperty(
          'message',
          'This pokemon does not exist ☹️'
        );
        done();
      });
  });
});
