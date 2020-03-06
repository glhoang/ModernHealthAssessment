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

function unionByIdAndGroupTargetIds(items, target, targetName) {
    const groupedMap = {};

    for (let item of items) {
        if (!groupedMap[item.id]) {
            groupedMap[item.id] = {
                ...item
            }
            groupedMap[item.id][targetName] = [];
            delete groupedMap[item.id].program_id;
            delete groupedMap[item.id].section_id;
        }
        groupedMap[item.id][targetName].push(item[target]);
    }
    console.log(groupedMap);

    return Object.values(groupedMap);
}