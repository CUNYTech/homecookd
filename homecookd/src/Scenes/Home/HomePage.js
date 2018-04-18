import React, { Component } from 'react';
import HomeJoinButtons from './HomeJoinButtons';
import DemoAutoPlay from './Carousel'
import HomeSearchBar from './HomeSearchBar'

class HomePage extends Component{
  render(){
    return(
      <div>
        <HomeSearchBar/>
          <center><h1>Homecookd</h1></center>


          <DemoAutoPlay/>

      </div>
    )
  }
}

export default HomePage;
