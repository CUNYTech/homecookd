import React, { Component } from 'react';
import {Card} from 'semantic-ui-react'

const FoodItemGridStyle = {
  width: '500px',
  margin: '0 auto',
  height: 0


}

class FoodItemGrid extends Component{
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render(){
    const src = 'https://dishes.menu/assets/img/tmp/food_default.jpg';
    const style={margin:5}
    return(
      <div>
        <Card.Group style={FoodItemGridStyle} itemsPerRow={3}>
          <Card style={style} raised image={src} description='Oxtails     $5.99'/>
          <Card style={style} raised image={src} />
          <Card style={style} raised image={src} />
          <Card style={style} raised image={src} />
          <Card style={style} raised image={src} />
          <Card style={style} raised image={src} />
          <Card style={style} raised image={src} />
          <Card style={style} raised image={src} />
          <Card style={style} raised image={src} />
        </Card.Group>
      </div>
    )
  }
}
export default FoodItemGrid;
