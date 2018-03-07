import React, { Component } from 'react';
import {Router, Route,Switch,Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { changeLogged } from './actions/account-actions';
import history from './Utils/history';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import HomePage from './Scenes/Home/HomePage';
import AboutUs from './Scenes/AboutUs/AboutUs';
import LoginForm from './Scenes/Account/Login/LoginForm';
import RegisterForm from './Scenes/Account/Register/RegisterForm';
import AccountPage from './Scenes/Account/MyAccount/AccountPage';
import Error404 from './Scenes/Error404';

import LoggedInMenu from './Scenes/Home/LoggedInMenu';


import './App.css';


const Routes = () => (
  <Router history = {history}>
    <div>
    <Switch>
    <Route exact path = "/" component = {HomePage} />
    <Route path = '/Login' component = {LoginForm}/>
    <Route path = '/Register' component = {RegisterForm} />
    <Route path = '/AboutUs' component = {AboutUs} />
    <Route path = '/MyAccount' component = {AccountPage}/>
    <Route  component={Error404} /> {/* 404 Route*/}

    </Switch>
    </div>
  </Router>
)

function handleClick(){
  // alert("TEST");
  // this.props.history.push('/');
}

class Login extends Component {
  static muiName = 'FlatButton';

  render() {
    return (
      <FlatButton {...this.props} href="/login" label="Login" />
    );
  }
}



class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      // logged : (localStorage.getItem('api_token') !== null),
      open: false
    }
  }
  handleChange = (event, logged) => {
    this.setState({logged: logged});
  }
    render(){
    return (
      <MuiThemeProvider>

      <AppBar
          title="HomeCookd"
          onTitleClick={handleClick}
          iconElementRight={this.props.logged ? <LoggedInMenu /> : <Login />}
          onLeftIconButtonClick={this.handleToggle}/>

          <Drawer
            docked={false}
            width={200}
            open={this.state.open}
            onRequestChange={(open) => this.setState({open})}
          >
            <MenuItem onClick={this.handleClose} href="/#">Home</MenuItem>
            <MenuItem onClick={this.handleClose}>Order</MenuItem>
            <MenuItem onClick={this.handleClose} href="/Menu">Menu</MenuItem>
            <MenuItem onClick={this.handleClose}>Location</MenuItem>
            <MenuItem onClick={this.handleClose}>Refresh</MenuItem>
            <MenuItem onClick={this.handleClose} href="/AboutUs" >About Us</MenuItem>
            <MenuItem onClick={this.handleClose}>Help</MenuItem>

          </Drawer>
        <Routes/>
        </MuiThemeProvider>
    );
  }
}

const mapStateToProps = state => {
  return {
    logged: state.logged
  };
};

export default connect(mapStateToProps)(App);
