// build your `Task` model here
const db = require('../../data/dbConfig');

const find = async () => {
    const tasks = await db('tasks');

    await tasks.forEach(task => {
        if (task.task_completed === 0 || task.task_completed === null) {
            task.task_completed = false;
        } else if (task.task_completed === 1) {
            task.task_completed = true;
        }
    })

    return tasks;
}

module.exports = {
    find
}