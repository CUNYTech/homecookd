import React, {Component} from 'react';
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton';
import './RegisterForm.css'
import {registerCustomer} from '../../../Utils/auth.js';
class RegisterForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            userName: '',
            password: ''
        };

        this.handleFormChange = this.handleFormChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.registerCustomer = registerCustomer.bind(this);

    }

    handleFormChange(e){
        const value = e.target.value;
        const name = e.target.name;
        this.setState({[name]: value})
    }
    handleFormSubmit(e){
        alert("TEST");
        const email = this.state.email;
        const userName = this.state.userName;
        const firstName = this.state.firstName;
        const lastName = this.state.lastName;
        const password = this.state.password;
        this.registerCustomer(email,userName,password,firstName,lastName);

        //call our axios promise, then retrieve the token from axios
      this.registerCustomer(email,userName,password,firstName,lastName)
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
        return(
          // <h2>Register</h2>
          <Paper className="form" onSubmit={this.handleFormSubmit}>
            <h2 className="formTitle">Register</h2>
            <TextField autoFocus floatingLabelText="First Name" name="firstName" type="text" value={this.state.firstName} onChange={this.handleFormChange} />
            <TextField floatingLabelText="Last Name" name="lastName" type="text" value={this.state.lastName} onChange={this.handleFormChange} />
            <TextField floatingLabelText="Email" name="email" type="test" value={this.state.email} onChange={this.handleFormChange} />
            <TextField floatingLabelText="Username" name="userName" type="text" value={this.state.userName} onChange={this.handleFormChange} />
            <TextField floatingLabelText="Password" name="password" type="password" value={this.state.password} onChange={this.handleFormChange} />
            <RaisedButton onClick={this.handleFormSubmit} label="Register" primary={true}  />
          </Paper>
        )
    }
}

export default RegisterForm
