// build your `/api/resources` router here
const router = require('express').Router();
const Resource = require('./model');

router.get('/resource', (req, res, next) => {
    res.json('resource');
});

module.exports = router;