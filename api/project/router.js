// build your `/api/projects` router here
const router = require('express').Router();
const Project = require('./model');

router.post('/project', async (req, res, next) => {
    const project = await Project.insert(req.body);
    res.json(project)
});

module.exports = router;