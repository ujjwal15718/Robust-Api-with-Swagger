/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('books', (t) => {
        t.increments('id');
        t.integer('candidate_id').references('id').inTable('candidates');
        t.string('book_title');
        t.string('description');
        t.timestamp('created_at').defaultTo(knex.fn.now());
    })

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('books')

};
