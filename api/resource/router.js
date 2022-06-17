// build your `/api/resources` router here
const router = require('express').Router();
const Resource = require('./model');

router.post('/resource', async (req, res, next) => {
    const newResource = await Resource.insert(req.body);
    res.status(201).json(newResource);
});

module.exports = router;