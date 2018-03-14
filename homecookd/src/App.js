import React, { Component } from 'react';

import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeLogged } from './actions/account-actions';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';


import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import RoutePaths from './App/RoutePaths'
import LoggedInMenu from './Scenes/Home/LoggedInMenu';

import './App.css';

class Login extends Component {
  static muiName = 'FlatButton';

  render() {
    return (
      <div>
        <FlatButton {...this.props} href="/login" label="Login" />
        <FlatButton {...this.props} href="/register" label="Register" />
      </div>

    );
  }
}


class App extends Component {

  logInUser(data) {
    this.props.logInUser(data);
  }
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      logged : false
    }
    this.logInUser = this.logInUser.bind(this);

    this.logInUser(localStorage.getItem('api_token')!== null)
  }

  handleChange = (event, logged) => {
    this.setState({logged: logged});
  }
  handleToggle = () => this.setState({open: !this.state.open});

    render(){

    return (
      <MuiThemeProvider>


      <AppBar
          title="HomeCookd"
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
            <MenuItem onClick={this.handleClose} href="/AboutUs">About Us</MenuItem>
            <MenuItem onClick={this.handleClose}>Help</MenuItem>


          </Drawer>
        <RoutePaths/>

        </MuiThemeProvider>






    );
  }
}

const mapStateToProps = state => {
  return {
    logged: state.logged
  };
};

const mapDispatchToProps = {
  logInUser: changeLogged
};

export default connect(mapStateToProps,mapDispatchToProps)(App);
