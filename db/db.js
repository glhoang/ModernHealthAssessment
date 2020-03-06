var knex = require('knex')({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: 'cheese',
        database: 'myapp'
    },
})

const db = {
    async getAllPrograms({ id }) {
        const query = knex.select().from('programs')

        if (id && id.length > 0) {
            query.whereIn('id', id)
        }

        return await query
    },
    
    async getAllSections({ id }) {
        const query = knex.select().from('sections')

        if (id && id.length > 0) {
            query.whereIn('id', id)
        }

        return await query
    },
    
    async getAllActivities({ id }) {
        const query = knex.select().from('activities')

        if (id && id.length > 0) {
            query.whereIn('id', id)
        }

        return await query
    }
}

module.exports = db;