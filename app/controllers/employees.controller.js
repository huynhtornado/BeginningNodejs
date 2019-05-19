// Define Dependences
const express = require('express');
var router = express.Router();
const Employee = require('../models/employees.model');

router.get('/',(req, res) => {
    res.render('employee/addOrEdit', {
        viewTitle: 'Insert Employee'
    })
});

router.post('/', (req, res) => {
    insertRecord(req, res);
});

function insertRecord(req, res) {
    const newEmployee = new Employee(req.body);
    newEmployee.save((err, succ) => {
        if (!err) {
            res.redirect('employee/listEmployees');
        } else {
            console.log('Error during record insertion : ' + err);
        }
    });
}

router.get('/listEmployees', (req, res) => {
    res.render('employee/listEmployees');
});

// Export module
module.exports = router;
