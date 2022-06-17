// build your `/api/tasks` router here
const router = require('express').Router();
const Task = require('./model');

router.get('/tasks', async (req, res, next) => {
    const tasks = await Task.find();
    res.json(tasks);
});

module.exports = router;