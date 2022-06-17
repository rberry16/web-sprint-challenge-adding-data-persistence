const check = async (req, res, next) => {
    if (!req.body.resource_name || req.body.resource_name === undefined) {
        res.status(500).json({message: 'resource name required'});
    }
}

module.exports = {
    check
}