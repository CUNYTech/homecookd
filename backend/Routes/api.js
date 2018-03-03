/*jshint esversion: 6 */

// Dependencies
const express = require('express');
const router = express.Router();

// Controller Imports
const apiHome = require('../Controller/apiHome');
const auth = require('../Controller/auth');


// API
// Base API Route
router.get('/', apiHome.getApi);
router.post('/', apiHome.postApi);

//Register User Route
router.get('/loginUser', auth.getLoginUser);
router.post('/loginUser', auth.loginUser);
//Register Seller Route
router.get('/loginSeller', auth.getLoginSeller);
router.post('/loginSeller', auth.loginSeller);

// Register Users(customer and seller) Route 
router.post('/auth/register/user', auth.registerUser);
router.post('/auth/register/seller', auth.registerSeller);

router.use(auth.checkAuth); // Routes that require and api_token after this

// 404 path
router.use(apiHome.invalidPath);

// Return Router
module.exports = router;
