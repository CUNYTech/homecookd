import React, { Component } from 'react';
import HomeJoinButtons from './HomeJoinButtons';
import AboutUS from './AboutUs'
class HomePage extends Component{
  render(){
    return(
      <div>
          <h1>Homecookd</h1>
            <AboutUS />
          <HomeJoinButtons/>
      </div>
    )
  }
}

export default HomePage;
