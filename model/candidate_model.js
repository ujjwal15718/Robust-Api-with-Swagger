const { Model } = require('objection');

const config = require("../knexfile")['development']
const db = require("knex")(config)
Model.knex(db)

class Candidates extends Model {
    static get tableName() {
        return 'candidates';
    }
    static get jsonSchema() {
        return {
            type: 'object',
            required: ['name', 'email'],

            properties: {
                id: { type: 'integer' },
                name: { type: 'string' },
                email: { type: 'string', minLength: 1, maxLength: 50, pattern: '^\\S+@\\S+\\.\\S+$' },
                created_at: { type: 'string', format: 'date-time' }
            }
        };
    }

    static get relationMappings() {
        const Books = require('./books_model');
        const Role = require('./role_model')
        return {
            books: {
                relation: Model.HasManyRelation,
                modelClass: Books,
                join: {
                    from: 'candidates.id',
                    to: 'books.candidate_id',
                },
            },
            role: {
                relation: Model.HasOneRelation,
                modelClass: Role,
                join: {
                    from: 'candidates.id',
                    to: 'role.candidate_id',
                },
            },
        };
    }
}

module.exports = Candidates;