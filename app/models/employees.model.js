const mongoose = require('mongoose');
const schema = mongoose.Schema;

var employeeSchema = new schema({
    fullName: {
        type: String,
        required: 'please fill fullname'
    },
    email: {
        type: String,
        required: 'Please fill email'
    },
    phone: {
        type: String
    },
    city: {
        type: String
    }
});

// custom validation for email
employeeSchema.path('email').validate((val) => {
    var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid email');

const employees = mongoose.model('employee', employeeSchema);

module.exports = employees;