import React, { Component } from 'react';
import HomeJoinButtons from './HomeJoinButtons';

class HomePage extends Component{
  render(){
    return(
      <div style={{backgroundColor:"#db2828", height:"100%"}}>
          <h1>Homecookd</h1>

          <HomeJoinButtons/>

      </div>
    )
  }
}

export default HomePage;
