import React, {Component} from 'react';
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton';
import './RegisterForm.css'

class RegisterForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            username: '',
            password: ''
        };

        this.handleFormChange = this.handleFormChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormChange(e){
        const value = e.target.value;
        const name = e.target.name;
        this.setState({[name]: value})
    }
    handleFormSubmit(e){
        e.preventDefault();
    }

    render(){
        return(
          // <h2>Register</h2>
          <Paper className="form" onSubmit={this.handleFormSubmit}>
            <h2 className="formTitle">Register</h2>
            <TextField floatingLabelText="First Name" name="firstName" type="text" value={this.state.firstName} onChange={this.handleFormChange} />
            <TextField floatingLabelText="Last Name" name="lastName" type="text" value={this.state.lastName} onChange={this.handleFormChange} />
            <TextField floatingLabelText="Email" name="email" type="test" value={this.state.email} onChange={this.handleFormChange} />
            <TextField floatingLabelText="Username" name="username" type="text" value={this.state.username} onChange={this.handleFormChange} />
            <TextField floatingLabelText="Password" name="password" type="password" value={this.state.password} onChange={this.handleFormChange} />
            <RaisedButton href="/" label="Register" primary={true}  />
          </Paper>
        )
    }
}

export default RegisterForm
