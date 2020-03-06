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
    },

    async selectActivityOption(activityId, optionId) {
        return await db.updateActivity(activityId, {
            selected_option_id: optionId
        })
    },

    async getOptions(queryParams) {
        return await db.getAllOptions(queryParams);
    }
}

module.exports = controller;