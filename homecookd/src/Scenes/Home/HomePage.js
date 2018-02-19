import React, { Component } from 'react';
import HomeJoinButtons from './HomeJoinButtons';
class HomePage extends Component{
  render(){
    return(
      <div>
        <center>
          <h1>Homecookd</h1>
          <HomeJoinButtons/>
        </center>
      </div>
    )
  }
}

export default HomePage;
