// Define Dependences
const express = require('express');
const router = express.Router();

// import controller
const controllerProject = require('../controllers/projects.controller');

// content
router.route('/')
    .get(controllerProject.index);


// Export module
module.exports = router;