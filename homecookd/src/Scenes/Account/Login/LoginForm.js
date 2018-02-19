import React, { Component } from 'react';

import {Link} from 'react-router-dom';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


class LoginForm extends Component{


  constructor(props) {
    super(props);
    this.state = {
    };
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

    };
    return(
      <center>
        <Paper style={style} zDepth={2}>
        <h2>LOGIN</h2>
        <TextField autoFocus
          floatingLabelText="Email"
        />
        <br/>
        <TextField
          floatingLabelText="Password"
          type="password"
        />
        <br />
        <RaisedButton href="/"label="Login" primary={true}  />
        <br/>

        <Link to="">Make an Account</Link>

        </Paper>
      </center>

    )
  }
}
export default LoginForm;
