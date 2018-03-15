import React from 'react'
import history from '../Utils/history';

import AboutUs from '../Scenes/AboutUs/AboutUs';
import HomePage from '../Scenes/Home/HomePage';
import GridListExampleSimple from '../Scenes/Menu/Menu'
import LoginForm from '../Scenes/Account/Login/LoginForm';
import RegisterSeller from '../Scenes/Account/Register/RegisterSeller';
import AccountPage from '../Scenes/Account/MyAccount/AccountPage';
import Error404 from '../Scenes/Error404';
import {Router, Route,Switch,Redirect} from 'react-router-dom';

const RoutePaths= () => (
  <Router history = {history}>
    <div>
    <Switch>
    <Route exact path = "/" component = {HomePage} />
    <Route path = '/Login' component = {LoginForm}/>
    <Route path = '/Menu' component = {GridListExampleSimple}/>
    <Route path = '/Register' component = {RegisterForm} />
    <Route path = '/RegisterSeller' component = {RegisterSeller} />
    <Route path = '/AboutUs' component = {AboutUs} />
    <Route path = '/MyAccount' component = {AccountPage}/>
    <Route  component={Error404} /> {/* 404 Route*/}

    </Switch>
    </div>
  </Router>
)

export default RoutePaths;
