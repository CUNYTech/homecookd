import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class HomeJoinButtons extends Component{
  render(){
    return(
      <div>
      <RaisedButton href="/Login" label="Login" primary={true}  />
      <RaisedButton href="/Register" label="Get Started" primary={true}  />
      </div>
    )
  }
}

export default HomeJoinButtons;
