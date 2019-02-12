// Update with your config settings.
require('dotenv').config();
const db_url = process.env.db_url;
module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/dev.sqlite3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  },
  staging: {
    client: 'pg',
    connection: db_url,
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  }
};
