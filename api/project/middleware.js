const check = async (req, res, next) => {
    if (!req.body.project_name || req.body.project_name === undefined) {
        res.status(500).json({message: 'project name is required'});
    } else {
        next();
    }
}

module.exports = {
    check
}