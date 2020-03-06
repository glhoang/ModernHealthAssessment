var knex = require('knex')({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: 'cheese',
        database: 'myapp'
    },
});

const db = {
    async getAllPrograms() {
        return await knex.select().from('programs')
    },
    
    async getAllSections() {
        return await knex.select().from('sections')
    },
    
    async getAllActivities() {
        return await knex.select().from('activities')
    }
}

module.exports = db;