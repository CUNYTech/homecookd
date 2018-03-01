import React, { Component } from 'react';

import {Link} from 'react-router-dom';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import {loginCustomer} from '../../../Utils/auth.js';

class LoginForm extends Component{


  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.loginCustomer = loginCustomer.bind(this);

  }

  handleFormChange(e){
      const value = e.target.value;
      const name = e.target.name;
      this.setState({[name]: value})
  }

  handleFormSubmit(e){
      alert("Logging in ");
      const email = this.state.email;

      const password = this.state.password;

      //call our axios promise, then retrieve the token from axios
    this.loginCustomer(email,password)
        .then( response => {
          var api_token = response.data.api_token;
          if(api_token.length > 0) {
            localStorage.setItem('api_token',api_token);

            this.props.history.push('/')
          }
          else this.OpenPopUp();
        })
        .catch( error => {
          localStorage.removeItem('api_token');
          alert(error.response.data.error);
          // alert(error);
          // this.OpenPopUp();
        })
      e.preventDefault();
  }

  render(){
    const style = {
      height: {flex:1},
      width: {flex:2},
      margin: 20,
      padding: 40,
      textAlign: 'center',
      display: 'inline-block',
      backgroundColor: 'grey'

    }


    return(
      <center>
        <Paper style={style} zDepth={2}>
        <h2>LOGIN</h2>
        <TextField name="email" autoFocus
          floatingLabelText="Email"
          onChange={this.handleFormChange}
        />
        <br/>
        <TextField
          name="password"
          floatingLabelText="Password"
          onChange={this.handleFormChange}
          type="password"
        />
        <br />
        <RaisedButton onClick={this.handleFormSubmit} href="/"label="Login" primary={true}  />
        <br/>

        <Link to="/register">Make an Account</Link>

        </Paper>
      </center>

    )
  }
}
export default LoginForm;
