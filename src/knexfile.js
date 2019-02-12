require('dotenv').config();
const pg = require('pg');
pg.defaults.ssl = true;

const db_url = process.env.DATABASE_URL;
module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/data/dev.sqlite3'
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
    useNullAsDefault: true
  },
  production: {
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
