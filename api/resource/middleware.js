const db = require('../../data/dbConfig');

const check = async (req, res, next) => {
    const existing = await db('resources').where('resource_name', req.body.resource_name).first();
    if (!req.body.resource_name || req.body.resource_name === undefined) {
        res.status(500).json({message: 'resource name required'});
    } else if (existing) {
        res.status(400).json({message: `resource_name: ${req.body.resource_name} is taken`});
    } else next();
}

module.exports = {
    check
}