const { Model } = require('objection');

const config = require("../knexfile")['development']
const db = require("knex")(config)
Model.knex(db)

class Books extends Model {
    static get tableName() {
        return 'books';
    }
    static get jsonSchema() {
        return {
            type: 'object',
            properties: {
                id: { type: 'integer' },
                candidate_id: { type: 'integer' },
                book_title: { type: 'string', minLength: 1, maxLength: 50 },
                description: { type: 'string', minLength: 1, maxLength: 200 },
                created_at: { type: 'string', format: 'date-time' }
            }
        };
    }
}

module.exports = Books;