// build your `/api/projects` router here
const router = require('express').Router();
const Project = require('./model');

router.get('/project', (req, res, next) => {
    res.json('project');
});

module.exports = router;