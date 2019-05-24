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
    let newEmployee = new Employee();
    newEmployee.fullName = req.body.fullName;
    newEmployee.email = req.body.email;
    newEmployee.phone = req.body.phone;
    newEmployee.city = req.body.city;

    newEmployee.save((err, succ) => {
        if (!err) {
            res.redirect('employee/listEmployees');
        } else {
            if (err.name == 'ValidationError') {
                handleValidationErrors(err, req.body);
                res.render('employee/addOrEdit', {
                    viewTitle: 'Insert Employee',
                    employee: req.body
                });
            }
            console.log('Error during record insertion : ' + err);
        }
    });
}

router.get('/listEmployees', (req, res) => {
    Employee.find((err, listEmployees) => {
        if (err) throw err;
        res.render('employee/listEmployees', {
            viewTitle: 'List Employees',
            listEmployees: listEmployees
        });
    });
});

function handleValidationErrors(err, body) {
    for (field in err.errors) {
        switch (err.errors[field].path) {
            case 'fullName':
                body['fullNameError'] = err.errors[field].message;
                break;
            case 'email':
                body['emailError'] = err.errors[field].message;
                break;
            default:
                break;
        }
    }
}

//delete employee
router.get('/delete/:_id', (req, res) => {
    Employee.findByIdAndRemove(req.params._id, (err, doc) => {
        console.log(req.params._id);
        if (!err) {
            res.redirect('/employee/listEmployees');
        } else {
            console.log("Error can't delete employee : "+ err);
        }    
    });
});

// Export module
module.exports = router;
