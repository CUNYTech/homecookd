import React, { Component } from 'react';
import HomeJoinButtons from './HomeJoinButtons';
import Steps from '../StepByStep/StepByStep'

import SidePanel from '../MyAccount/Side';
import InfoForm  from '../MyAccount/Account';

class HomePage extends Component{
  render(){
    return(
      <div>
          <h1>Homecookd</h1>
          <center>
            <Steps/>
            </center>

          <HomeJoinButtons/>

          <SidePanel/>
          <InfoForm/>
      </div>
    )
  }
}

export default HomePage;
