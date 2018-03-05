import React, { Component } from 'react';

import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';


class InfoForm extends Component{
render(){
const style = {
  marginLeft: 20,
};
return(

  <Paper zDepth={2}>
    <TextField hintText="First name" style={style} underlineShow={false} />
    <Divider />
    <TextField hintText="Last name" style={style} underlineShow={false} />
    <Divider />
    <TextField hintText="Email address" style={style} underlineShow={false} />
    <Divider />
    <TextField hintText="Address" style={style} underlineShow={false} />
    <Divider />
    <TextField hintText="Phone Number" style={style} underlineShow={false} />
    <Divider />
    <TextField hintText="Visa" style={style} underlineShow={false} />
    <Divider />
  </Paper>
    )
  }
}
export default InfoForm;
