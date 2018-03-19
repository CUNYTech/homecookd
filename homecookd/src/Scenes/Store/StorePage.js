import React, { Component } from 'react';
import StoreInfo from './StoreInfo';
import ProfileImage from './ProfileImage';
import FoodItemGrid from './FoodItemGrid';
class StorePage extends Component{
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render(){
    const style ={
      margin: 50
    }
    const FoodItemGridStyle = {
      width:500
    }
    return(
      <div style = {style}>
      <div>
      <ProfileImage source="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"/>
      <StoreInfo/>
      <div style={FoodItemGridStyle}>
      <FoodItemGrid/>
      </div>
      </div>

      </div>
    )
  }
}
export default StorePage;
