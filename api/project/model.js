// build your `Project` model here
const db = require('../../data/dbConfig');

const insert = async (project) => {
    await db('projects').insert(project);
    const newProject = await db('projects').where('project_name', project.project_name).first();
    let comp = false;
    if (newProject.project_completed === 0) {
        comp = false;
    } else if (newProject.project_completed === 1) {
        comp = true;
    }

    return {
        project_id: newProject.project_id,
        project_name: newProject.project_name,
        project_description: newProject.project_description,
        project_completed: comp
    }
}

module.exports = {
    insert
}