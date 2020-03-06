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
        const query = knex.select(
            'id',
            'name',
            'descriptions',
            knex.raw('ARRAY_AGG (programs_sections.section_id) section_ids')
        ).from('programs')
        .join('programs_sections', 'programs.id', 'programs_sections.program_id')

        if (id && id.length > 0) {
            query.whereIn('id', id)
        }

        query.groupBy('id')

        return await query
    },
    
    async getAllSections({ id }) {
        const query = knex.select(
            'id',
            'name',
            'descriptions',
            'over_view_image',
            'order_idx',
            knex.raw('ARRAY_AGG (sections_activities.activity_id) activity_ids'),
        ).from('sections')
        .join('sections_activities', 'sections.id', 'sections_activities.section_id')
            
        if (id && id.length > 0) {
            query.whereIn('sections.id', id)
        }

        query.groupBy('id')
        .orderBy('sections.order_idx', 'asc');

        return await query
    },
    
    async getAllActivities({ id }) {
        const query = knex.select(
            'id',
            'html',
            'selected_option_id',
            knex.raw('ARRAY_AGG (sections_activities.section_id) sections_ids')
        )
        .from('activities')
        .join('sections_activities', 'activities.id', 'sections_activities.activity_id')

        if (id && id.length > 0) {
            query.whereIn('id', id)
        }

        query.groupBy('id')

        return await query
    }
}

module.exports = db;