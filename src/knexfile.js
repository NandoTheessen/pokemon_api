require('dotenv').config();

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/data/dev.sqlite3'
    },
    migrations: {
      directory: './data/migrations'
    },
    useNullAsDefault: true
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  },
  test: {
    client: 'sqlite3',
    connection: {
      filename: './src/data/test.sqlite3'
    },
    migrations: {
      directory: './src/data/migrations'
    },
    useNullAsDefault: true
  }
};
