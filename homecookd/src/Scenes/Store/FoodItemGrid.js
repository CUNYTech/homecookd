import React, { Component } from 'react';
import {Card} from 'semantic-ui-react'
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
        <Card.Group itemsPerRow={3}>
          <Card style={style} raised image={src} />
          <Card  style={style}raised image={src} />
          <Card style={style} raised image={src} />
          <Card  style={style}raised image={src} />
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
