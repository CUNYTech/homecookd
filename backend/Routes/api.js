/*jshint esversion: 6 */

// Dependencies
const express = require('express');
const router = express.Router();

// Controller Imports
const apiHome = require('../Controller/apiHome');
const auth = require('../Controller/auth');
const sellerModification = require('../Controller/sellerModification');


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


// user information
router.post('/auth/userInfo', auth.userInfo);
// seller information
router.post('/auth/sellerInfo', auth.sellerInfo);

// router.use(auth.checkAuth); // Routes that require and api_token after this

// try - delete later
router.post('/sellerModification/foodItemCreate', sellerModification.foodItemCreate);

// 404 paths
router.use(apiHome.invalidPath);

// Return Router
module.exports = router;
