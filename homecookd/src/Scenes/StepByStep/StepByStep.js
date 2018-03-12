import React, { Component } from 'react';
import { Grid, Segment } from 'semantic-ui-react'

class Steps extends Component{
  render(){
    const style = {
      height: {flex:1},
      width: {flex:2},
      marginLeft: 500,
      padding: 40,
      textAlign: 'center',
      display: '',
      backgroundColor: '#00BCD4'
    }
    return(
  <Grid columns={3} divided>
    <Grid.Row stretched>
      <Grid.Column style={style}>
        <Segment>Register for an account</Segment>
        <Segment>Choose between a buyer and a seller account</Segment>
        <Segment>Start enjoying some home cooked meals</Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
    )
  }
}

export default Steps;
