exports.up = (knex) => {
    return knex.schema.createTable('clients', (table) => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('message');
    })
}

exports.down = (knex) => {
    return knex.schema.dropTableIfExists('clients');
};