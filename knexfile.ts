// Update with your config settings.

module.exports = {
    development: {
        client: 'pg',
        connection: {
            database: 'tinker-tool-builder-dev',
            user: 'postgres',
            password: '1234',
        },
        migrations: {
            tableName: 'knex_migrations',
            extension: 'ts',
            directory: `${__dirname}/src/knex/migrations`,
        },
        seeds: {
            tableName: 'knex_migrations',
            directory: `${__dirname}/src/knex/seeds`,
        },
    },
};
