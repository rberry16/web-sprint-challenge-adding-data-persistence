// build your `/api/projects` router here
const router = require('express').Router();
const Project = require('./model');

router.post('/projects', async (req, res) => {
    const project = await Project.insert(req.body);
    res.status(201).json(project)
});

router.get('/projects', async (req, res) => {
    const projects = await Project.find();
    res.json(projects);
})

module.exports = router;