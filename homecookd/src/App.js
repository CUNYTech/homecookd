import React, { Component } from 'react';
import {Router, Route,Switch} from 'react-router-dom';
import history from './Utils/history'
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import HomePage from './Scenes/Home/HomePage';

import LoginForm from './Scenes/Account/Login/LoginForm';
import Error404 from './Scenes/Error404'

import './App.css';

const Routes = () => (
  <Router history = {history}>
    <div>
    <Switch>
    <Route  exact path = "/" component = {HomePage} />
    <Route path = '/Login' component = {LoginForm}/>
    <Route  component={Error404} /> {/* 404 Route*/}

    </Switch>
    </div>
  </Router>
)

function handleClick(){
  alert("TEST");
}

class App extends Component {
  render() {
    return (

      <MuiThemeProvider>

      <AppBar
          title="HomeCookd"
          onTitleClick={handleClick}
          iconClassNameRight="muidocs-icon-navigation-expand-more"/>

        <Routes/>
        </MuiThemeProvider>

    );
  }
}

export default App;
