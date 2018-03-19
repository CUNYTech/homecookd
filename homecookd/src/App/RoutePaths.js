import React from 'react'
import history from '../Utils/history';

import AboutUs from '../Scenes/AboutUs/AboutUs';
import HomePage from '../Scenes/Home/HomePage';
import GridListExampleSimple from '../Scenes/Menu/Menu'
import LoginForm from '../Scenes/Account/Login/LoginForm';
import RegisterSeller from '../Scenes/Account/Register/RegisterSeller';
import LoginSellerForm from '../Scenes/Account/Login/LoginSellerForm';
<<<<<<< HEAD
=======
import RegisterForm from '../Scenes/Account/Register/RegisterForm';
import RegisterSeller from '../Scenes/Account/Register/RegisterSeller';
import LoginSellerForm from '../Scenes/Account/Login/LoginSellerForm';
>>>>>>> 941f98e02bd2edc330cf4b2aa444bd71d788537b
import AccountPage from '../Scenes/Account/MyAccount/AccountPage';
import StorePage from '../Scenes/Store/StorePage';
import RegisterForm from '../Scenes/Account/Register/RegisterForm'
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
    <Route path = '/Login' component = {LoginForm}/>
    <Route path = '/Menu' component = {GridListExampleSimple}/>
    <Route path = '/Register' component = {RegisterForm} />
    <Route path = '/RegisterSeller' component = {RegisterSeller} />
    <Route path = '/LoginSeller' component = {LoginSellerForm}/>
    <Route path = '/AboutUs' component = {AboutUs} />
    <Route path = '/MyAccount' component = {AccountPage}/>
    <Route path = '/Store' component = {StorePage}/>



    // ADMIN RoutePaths
    <Route path = '/Admin/Login' component = {AdminLogin}/>
    <Route path = '/Admin/AdminPanel' component = {AdminPanel}/>

    <Route  component={Error404} /> {/* 404 Route*/}

    </Switch>
    </div>
  </Router>
)

export default RoutePaths;
