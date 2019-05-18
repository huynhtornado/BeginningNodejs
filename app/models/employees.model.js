const mongoose = require('mongoose');
const schema = mongoose.Schema;

var employeeSchema = new schema({
    fullName: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    city: {
        type: String
    }
});

const employees = mongoose.model('employee', employeeSchema);

module.exports = employees;