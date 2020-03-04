// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: 'myapp',
      user: 'postgres',
      password: 'cheese'
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './seeds'
    }
  }
}