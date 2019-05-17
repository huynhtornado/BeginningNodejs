const Project = require('../models/project.model');
module.exports = {
    index: (req, res, next) => {
        res.status(200).json({
            mess: 'Welcome to project Rest API + nodejs!'
        });
    },

    newProject: (req, res, next) => {
        const newPro = new Project(req.body);
        newPro.save().then()
    },
}