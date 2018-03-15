import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeLogged } from './actions/account-actions';

import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';



import RoutePaths from './App/RoutePaths'
import LoggedInMenu from './Scenes/Home/LoggedInMenu';

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
        <FlatButton {...this.props} href="/registerseller" label="Register as Seller" />
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
            <MenuItem onClick={this.handleClose} href="/login/seller">Login As a Seller</MenuItem>
            <MenuItem onClick={this.handleClose} href="/registerSeller">Register As a Seller</MenuItem>


          </Drawer>
        <RoutePaths/>
<<<<<<< HEAD

        </MuiThemeProvider>



=======
        </MuiThemeProvider>
>>>>>>> 4dd47f8d6d4edc48caa0f43e5c3cafa7dd3d7844
    );
  }
}

const mapStateToProps = state => {
  return {
    logged: state.logged,
    accountType: state.accountType
  };
};
const mapDispatchToProps = {
  logInUser: changeLogged
};

<<<<<<< HEAD
export default connect(mapStateToProps,mapDispatchToProps)(App);
=======
export default connect(mapStateToProps, mapDispatchToProps)(App);
>>>>>>> 4dd47f8d6d4edc48caa0f43e5c3cafa7dd3d7844
