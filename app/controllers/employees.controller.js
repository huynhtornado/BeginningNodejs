const Employee = require('../models/employees.model');

module.exports = {
    index: (req, res, next) => {
        res.render('employee/addOrEdit', {
            viewTitle: 'Insert Employee'
        })
    },

    newProject: (req, res, next) => {
        const newEmployee = new Employee(req.body);
        newEmployee.save()
            .then(employ => {
                console.log(employ);
                res.status(201).json(employ);
            })
            .catch(err => {
                next(err);
            });
    },
}