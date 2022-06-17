// build your `/api/resources` router here
const router = require('express').Router();
const Resource = require('./model');

router.post('/resources', async (req, res) => {
    const newResource = await Resource.insert(req.body);
    res.status(201).json(newResource);
});

router.get('/resources', async (req, res) => {
    const resources = await Resource.find();
    res.json(resources);
})

module.exports = router;