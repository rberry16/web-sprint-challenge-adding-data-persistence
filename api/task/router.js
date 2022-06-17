// build your `/api/tasks` router here
const router = require('express').Router();
const Task = require('./model');
const md = require('./middleware');

router.get('/tasks', async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
});

router.post('/tasks', md.check, async (req, res) => {
    const newTask = await Task.insert(req.body);
    res.status(201).json(newTask);
})

module.exports = router;