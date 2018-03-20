/*jshint esversion: 6 */

// Dependencies
const express = require('express');
const router = express.Router();

// Controller Imports
const apiHome = require('../Controller/apiHome');
const sudoApi = require('../Controller/sudoApi');

router.post('/auth/admin/login', sudoApi.loginAdmin);

router.post('/admin/getUsers', sudoApi.checkAuth, sudoApi.getUsers);
router.post('/admin/getSellers', sudoApi.checkAuth, sudoApi.getSellers);
router.post('/admin/approveSeller', sudoApi.checkAuth, sudoApi.approveSeller);
router.post('/admin/rejectSeller', sudoApi.checkAuth, sudoApi.rejectSeller);


// Return Router
module.exports = router;
