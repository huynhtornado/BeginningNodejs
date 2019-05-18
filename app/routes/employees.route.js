// Define Dependences
const express = require('express');
const router = express.Router();

// import controller
const controllerProject = require('../controllers/employees.controller');

// content
router.route('/')
    .get(controllerProject.index)
    .post(controllerProject.newProject)


// Export module
module.exports = router;