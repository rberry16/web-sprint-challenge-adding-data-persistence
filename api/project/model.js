// build your `Project` model here
const db = require('../../data/dbConfig');

const insert = async (project) => {
    await db('projects').insert(project);
    const newProject = await db('projects').where('project_name', project.project_name).first();
    if (newProject.project_completed === 0) {
        newProject.project_completed = false;
        return newProject;
    } else if (newProject.project_completed === 1) {
        newProject.project_completed = true;
        return newProject;
    }
}

const find = async () => {
    const projects = await db('projects');
    await projects.forEach(pro => {
        if (pro.project_completed === 0) {
            pro.project_completed = false;
        } else if (pro.project_completed === 1) {
            pro.project_completed = true;
        }
    });
    return projects;
}

module.exports = {
    insert,
    find
}