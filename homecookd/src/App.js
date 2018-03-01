import React, { Component } from 'react';
import {Router, Route,Switch} from 'react-router-dom';
import history from './Utils/history'
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';

import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import HomePage from './Scenes/Home/HomePage';

import LoginForm from './Scenes/Account/Login/LoginForm';
import RegisterForm from './Scenes/Account/Register/RegisterForm'
import Error404 from './Scenes/Error404'

import './App.css';

const Routes = () => (
  <Router history = {history}>
    <div>
    <Switch>
    <Route  exact path = "/" component = {HomePage} />
    <Route path = '/Login' component = {LoginForm}/>
    <Route path = '/Register' component = {RegisterForm} />
    <Route  component={Error404} /> {/* 404 Route*/}

    </Switch>
    </div>
  </Router>
)

function handleClick(){
  // alert("TEST");
}

class Login extends Component {
  static muiName = 'FlatButton';

  render() {
    return (
      <FlatButton {...this.props} href="/login" label="Login" />
    );
  }
}

const Logged = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="Refresh" />
    <MenuItem primaryText="Help" />
    <MenuItem primaryText="Sign out" />
  </IconMenu>
);



class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      logged : (localStorage.getItem('api_token') !== null)
    }

}
  handleChange = (event, logged) => {
    this.setState({logged: logged});
  }
  render() {
    return (

      <MuiThemeProvider>

      <AppBar
          title="HomeCookd"
          onTitleClick={handleClick}
          iconElementRight={this.state.logged ? <Logged /> : <Login />}/>

        <Routes/>
      </MuiThemeProvider>
    );
  }
}

export default App;
