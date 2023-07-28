const { Model } = require('objection');

const config = require("../knexfile")['development']
const db = require("knex")(config)
Model.knex(db)

class Role extends Model {
    static get tableName() {
        return 'role';
    }
    static get jsonSchema() {
        return {
            type: 'object',
            properties: {
                id: { type: 'integer' },
                candidate_id: { type: 'integer' },
                role: { type: 'string', minLength: 1, maxLength: 50 },
                created_at: { type: 'string', format: 'date-time' }
            }
        };
    }
}

module.exports = Role;