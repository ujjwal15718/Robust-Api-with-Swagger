// Update with your config settings.
require("dotenv").config()

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: process.env.database,
      user: process.env.user,
      password: process.env.password,
    },
    migrations: {
      tableName: 'migrations',
      schemaName: 'public', // Specify the schema for the knex_migrations table
    },
  },

};
