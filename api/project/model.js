// build your `Project` model here
const db = require('../../data/dbConfig');

const insert = async (project) => {
    await db('projects').insert(project);
    const result = await db('projects').where('project_name', project.project_name)
    return result;
}

module.exports = {
    insert
}