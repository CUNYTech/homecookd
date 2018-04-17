import React, { Component } from 'react';
import HomeJoinButtons from './HomeJoinButtons';
import FoodChoiceGrid from './FoodChoices/FoodChoiceGrid';

class HomePage extends Component{
  render(){
    return(
      <div style={{backgroundColor:"#db2828", height:"100%"}}>
          <h1>Homecookd</h1>

          <HomeJoinButtons/>
          <FoodChoiceGrid/>

      </div>
    )
  }
}

export default HomePage;
