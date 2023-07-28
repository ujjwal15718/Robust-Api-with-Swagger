/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('role', (t) => {
        t.increments('id');
        t.integer('candidate_id').references('id').inTable('candidates');
        t.string('candidate_role');
        t.timestamp('created_at').defaultTo(knex.fn.now());
    })

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('role')

};
