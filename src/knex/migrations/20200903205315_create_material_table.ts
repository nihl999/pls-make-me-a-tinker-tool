import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('materials', function (table) {
        table.increments('id').primary();
        table.string('name').notNullable().unique();
        table.text('description').notNullable();
        table.integer('modifiers').notNullable();
        table.json('durabilities').notNullable();
        table.integer('attack_damage').notNullable();
        table.integer('mining_speed').notNullable();
        table.integer('mining_level').notNullable();
        table.integer('trait_id').references('traits.traitId');
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists('materials');
}
