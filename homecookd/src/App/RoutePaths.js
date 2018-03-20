import React from 'react'
import history from '../Utils/history';

import AboutUs from '../Scenes/AboutUs/AboutUs';
import HomePage from '../Scenes/Home/HomePage';
import GridListExampleSimple from '../Scenes/Menu/Menu'
import LoginForm from '../Scenes/Account/Login/LoginForm';
import RegisterSeller from '../Scenes/Account/Register/RegisterSeller';
import LoginSellerForm from '../Scenes/Account/Login/LoginSellerForm';
import RegisterForm from '../Scenes/Account/Register/RegisterForm';

import AccountPage from '../Scenes/Account/MyAccount/AccountPage';
import StorePage from '../Scenes/Store/StorePage';
import SellerAccount from '../Scenes/Seller/SellerAccount/SellerAccount';
// ADMIN Imports

import AdminLogin from '../Scenes/Admin/AdminLogin';
import AdminPanel from '../Scenes/Admin/AdminPanel';

import Error404 from '../Scenes/Error404';
import {Router, Route,Switch} from 'react-router-dom';

const RoutePaths= () => (
  <Router history = {history}>
    <div>
    <Switch>
    <Route exact path = "/" component = {HomePage} />

    <Route path = '/auth/Login' component = {LoginForm}/>
    <Route path = '/auth/Register' component = {RegisterForm} />
    <Route path = '/auth/RegisterSeller' component = {RegisterSeller} />
    <Route path = '/auth/LoginSeller' component = {LoginSellerForm}/>
    <Route path = '/AboutUs' component = {AboutUs} />
    <Route path = '/MyAccount' component = {AccountPage}/>
    <Route path = '/Store' component = {StorePage}/>
    <Route path = '/MySellerAccount' component = {SellerAccount}/>




    // ADMIN RoutePaths
    <Route path = '/Admin/Login' component = {AdminLogin}/>
    <Route path = '/Admin/AdminPanel' component = {AdminPanel}/>

    <Route component={Error404} /> {/* 404 Route*/}

    </Switch>
    </div>
  </Router>
)

export default RoutePaths;
