// build your `/api/tasks` router here
const router = require('express').Router();
const Task = require('./model');

router.get('/task', (req, res, next) => {
    res.json('task');
});

module.exports = router;