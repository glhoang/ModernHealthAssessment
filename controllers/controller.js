const db = require('../db/db')

const controller = {
    async getPrograms(){
        return await db.getAllPrograms()
    },
    
    async getSections(){
        return await db.getAllSections()
    },
    
    async getActivities(){
        return await db.getAllActivities()
    }
}

module.exports = controller;