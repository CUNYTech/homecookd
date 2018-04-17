/*jshint esversion: 6 */

// Dependencies
const express = require('express');
const router = express.Router();

// Controller Imports
const apiHome = require('../Controller/apiHome');
const auth = require('../Controller/auth');
const sellerModification = require('../Controller/sellerModification');
const getFoodItems = require('../Controller/food/getFoodItems');
const seller = require('../Controller/seller/profile');
const foodTypeModification = require('../Controller/foodTypeModification');
const updateAccount = require('../Controller/updateAccount');
const getSellerTime = require('../Controller/sellerTime');

// const foodTypeModification = require('../Controller/foodTypeModification/')

// API
// Base API Route
router.get('/', apiHome.getApi);
router.post('/', apiHome.postApi);

//Register User Route
router.get('/auth/login/user', auth.getLoginUser);
router.post('/auth/login/user', auth.loginUser);

//Register Seller Route
router.get('/auth/login/seller', auth.getLoginSeller);
router.post('/auth/login/seller', auth.loginSeller);

// Register Users(customer and seller) Route
router.post('/auth/register/user', auth.validateRegistration, auth.registerUser);
router.post('/auth/register/seller', auth.validateRegistration, auth.registerSeller);


// user information
router.post('/auth/information/user', auth.checkAuth, auth.userInfo);
// seller information
router.post('/auth/information/seller', auth.checkAuth, auth.sellerInfo);

// router.use(auth.checkAuth); // Routes that require and api_token after this

// try - delete later
router.post('/seller/foodItemCreate', sellerModification.foodItemCreate);

// test -- L
router.post('/modification/foodTypeCreate/seller', foodTypeModification.foodTypeCreate);



// Get Food information
router.get('/food/foodID/:FoodID', getFoodItems.getFoodItemByID); // Returns a Food object
router.get('/food/sellerID/:SellerID', getFoodItems.getFoodItemsBySellerID); // Returns an array of Food Objects
router.post('/food/api_token',getFoodItems.getFoodItemsByAPItoken);
router.post('/modification/foodItemCreate/seller', sellerModification.foodItemCreate);
router.post('/update/account/seller', updateAccount.updateSellerAccount);

// Get Seller information
router.get('/seller/sellerID/:sellerID', seller.sellerInfoBySellerID);

//Get Seller opening and closing time 
route.post('/seller/sellerTime/schedule', getSellerTime.scheduleCreate);

// Update Seller
router.post('/seller/foodUpdate/:foodID', seller.updateFoodItem);

// 404 paths
router.use(apiHome.invalidPath);

// Return Router
module.exports = router;
