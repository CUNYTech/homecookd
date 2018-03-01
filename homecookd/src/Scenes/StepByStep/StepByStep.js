import React, { Component } from 'react';
import './StepByStep.css'
import Paper from 'material-ui/Paper';


class Steps extends Component{
  render(){
    const style = {
      height: {flex:1},
      width: {flex:2},
      margin: 20,
      border: 50,
      padding: 40,
      textAlign: 'center',
      display: 'inline-block',
      backgroundColor: '#00BCD4'
    }

    const Inner = {
      // backgroundColor: '#424242'
    }



    return(
    <Paper style={style} zDepth={5}>

    <div class="flex-container">
    <Paper style={Inner} className="flex-item">Register for an account</Paper>
    <Paper className="flex-item">Choose between a buyer or seller account</Paper>
    <Paper className="flex-item">Start enjoying some home cooked meals</Paper>


  </div>
</Paper>
    )
  }
}

export default Steps;
