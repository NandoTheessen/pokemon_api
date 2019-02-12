# Pokemon API

- Simple implementation of an API that caches requests for further use
- Has a single get endpoint `/api/:pokemon_name that returns data on that specific pokemon

## How to run it locally:

- Clone repository
- Use `npm install / yarn` to install dependencies
- Use `npm / yarn test` to run test suite
- Use `npm / yarn dev` to start the service

## Environment variables

- Create a .env file
- Pass in the URL for the API (based on `https://pokeapi.co/api/v2/pokemon`)

## Switching to a different cache

- By default this comes with a sqlite db for caching
- Simply change the knexfile to include a db of your choice, the ORM is db agnostic and should support a variety of SQL flavors.
