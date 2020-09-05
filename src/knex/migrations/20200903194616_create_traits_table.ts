import Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('traits', function (table) {
        table.increments('traitId');
        table.string('name').notNullable();
        table.text('description').notNullable();
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists('traits');
}
