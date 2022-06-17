// build your `Task` model here
const db = require('../../data/dbConfig');

const find = async () => {
    const tasks = await db('tasks as t')
        .leftJoin('projects as p', 'p.project_id', 't.project_id')
        .select('p.project_id', 'p.project_name', 'p.project_description', 't.task_id', 't.task_description', 't.task_notes', 't.task_completed')

    await tasks.forEach(task => {
        if (task.task_completed === 0 || task.task_completed === null) {
            task.task_completed = false;
        } else if (task.task_completed === 1) {
            task.task_completed = true;
        }
    })

    return tasks;
}

const insert = async (task) => {
    await db('tasks').insert(task);
    const newTask = await db('tasks').where('task_description', task.task_description).first();
    
    if (newTask.task_completed === 0) {
        newTask.task_completed = false;
        return newTask;
    } else if (newTask.task_completed === 1) {
        newTask.task_completed = true;
        return newTask;
    }
}

module.exports = {
    find,
    insert
}