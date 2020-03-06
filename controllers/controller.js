const db = require('../db/db')

const controller = {
    async getPrograms(queryParams) {
        return await db.getAllPrograms(queryParams)
    },
    
    async getSections(queryParams) {
        return await db.getAllSections(queryParams)
    },
    
    async getActivities(queryParams) {
        return await db.getAllActivities(queryParams)
    }
}

module.exports = controller;