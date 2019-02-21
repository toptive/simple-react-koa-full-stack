module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './src/server/migrations'
    },
    seeds: {
      directory: './src/server/seeds'
    },
    debug: true,
  },
  production: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './src/server/migrations'
    },
    seeds: {
      directory: './src/server/seeds'
    },
    debug: true,
  },
};
