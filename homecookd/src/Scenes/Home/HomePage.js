import React, { Component } from 'react';
import HomeJoinButtons from './HomeJoinButtons';
import AboutUS from './AboutUs'
import Steps from '../StepByStep/StepByStep'


class HomePage extends Component{
  render(){
    return(
      <div>
          <h1>Homecookd</h1>
            <Steps/>

          <HomeJoinButtons/>
      </div>
    )
  }
}

export default HomePage;
