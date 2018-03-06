import React, { Component } from 'react';
import {Router, Route,Switch} from 'react-router-dom';
import history from './Utils/history'
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import AboutUs from './Scenes/AboutUs/AboutUs';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import HomePage from './Scenes/Home/HomePage';

import LoginForm from './Scenes/Account/Login/LoginForm';
import RegisterForm from './Scenes/Account/Register/RegisterForm'
import Error404 from './Scenes/Error404'
import SearchExampleStandard from './Scenes/Home/SearchBar';
import ButtonExampleAnimated from './Scenes/Home/AnimatedButtons'

import LeftDrawer from './Scenes/Home/LeftDrawer.js'

import './App.css';

const Routes = () => (
  <Router history = {history}>
    <div>
    <Switch>
    <Route  exact path = "/" component = {HomePage} />
    <Route path = '/Login' component = {LoginForm}/>
    <Route path = '/Register' component = {RegisterForm} />
    <Route path = '/AboutUs' component = {AboutUs} />
    <Route  component={Error404} /> // 404 Route

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

const handleSignOut = () => {
  localStorage.removeItem('api_token');
  alert("Signed Out");
}
const LoggedInMenu = (props) => (
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
    <MenuItem onClick={handleSignOut} primaryText="Sign out" />
  </IconMenu>
);


class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      logged : (localStorage.getItem('api_token') !== null),
      open: false
    }

}
  handleChange = (event, logged) => {
    this.setState({logged: logged});
  }
  handleToggle = () => this.setState({open: !this.state.open});

  render() {

    return (

      <MuiThemeProvider>


      <AppBar

          title="HomeCookd test"
          onTitleClick={handleClick}
          iconElementRight={this.state.logged ? <LoggedInMenu /> : <Login />}
          onLeftIconButtonClick={this.handleToggle}/>

          <Drawer
            docked={false}
            width={200}
            open={this.state.open}
            onRequestChange={(open) => this.setState({open})}
          >
            <MenuItem onClick={this.handleClose}>Home</MenuItem>
            <MenuItem onClick={this.handleClose}>Order</MenuItem>
            <MenuItem onClick={this.handleClose} href="/Menu">Menu</MenuItem>
            <MenuItem onClick={this.handleClose}>Location</MenuItem>
            <MenuItem onClick={this.handleClose}>Refresh</MenuItem>
            <MenuItem onClick={this.handleClose} href="/AboutUs" >About Us</MenuItem>
            <MenuItem onClick={this.handleClose}>Help</MenuItem>


          </Drawer>
      <SearchExampleStandard/>
      <ButtonExampleAnimated/>
        <Routes/>

        </MuiThemeProvider>

    );
  }
}

export default App;
