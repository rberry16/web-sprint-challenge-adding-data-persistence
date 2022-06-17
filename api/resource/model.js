// build your `Resource` model here
const db = require('../../data/dbConfig');

const insert = async (resource) => {
    await db('resources').insert(resource);
    const newResource = await db('resources').where('resource_name', resource.resource_name).first();
    return {
        resource_id: newResource.resource_id,
        resource_name: newResource.resource_name,
        resource_description: newResource.resource_description
    };
}

const find = async () => {
    const resources = await db('resources');
    return resources;
}

module.exports = {
    insert,
    find
}