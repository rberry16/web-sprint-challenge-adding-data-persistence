const projects = [
    {project_name: 'fix car', project_description: 'make car good', project_completed: 0},
    {project_name: 'build house', project_description: 'good house', project_completed: 1},
    {project_name: 'replace sink', project_description: 'sink!', project_completed: 0}
]

const resources = [
    {resource_name: 'wheel', resource_description: 'round thing'},
    {resource_name: 'walls'},
    {resource_name: 'sink', resource_description: 'the new one'}
]

const tasks = [
    {task_description: 'put on car', task_notes: 'easy', task_completed: 0, project_id: 1},
    {task_description: 'build it', task_notes: 'put up walls', project_id: 2},
    {task_description: 'put in sink', project_id: 3}
]

const project_resources = [
    {resource_id: 1, project_id: 1, quantity: 1},
    {resource_id: 2, project_id: 2, quantity: 2},
    {resource_id: 3, project_id: 3, quantity: 3}
]

exports.seed = async function (knex) {
    await knex('projects').insert(projects)
    await knex('resources').insert(resources)
    await knex('tasks').insert(tasks)
    await knex('project_resources').insert(project_resources)
}