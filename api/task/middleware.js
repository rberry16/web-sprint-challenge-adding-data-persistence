const db = require('../../data/dbConfig');

const check = async (req, res, next) => {
    if (!req.body.project_id || req.body.project_id === undefined) {
        res.status(400).json({message: 'project_id required'});
    } else if (!req.body.task_description || req.body.task_description === undefined) {
        res.status(400).json({message: 'task_description required'});
    } else if (req.body.project_id) {
        const projects = await db('projects');
        let existing = false;
        await projects.map(pro => {
            if (pro.project_id === req.body.project_id) {
                existing = true
            }
        })
        if (!existing) {
            res.status(400).json({message: 'invalid project_id'});
        } else {
            next();
        }
    }
}

module.exports = {
    check
}