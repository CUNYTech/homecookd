/*jshint esversion: 6 */

// Dependencies
const express = require('express');
const router = express.Router();

// Controller Imports
const apiHome = require('../Controller/apiHome');


// API
// Base API Route
router.get('/', apiHome.getApi);
router.post('/', apiHome.postApi);


// 404 path
router.use(apiHome.invalidPath);

// Return Router
module.exports = router;
