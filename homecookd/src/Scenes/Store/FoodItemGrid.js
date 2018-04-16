import React, { Component } from 'react';
import {Card} from 'semantic-ui-react'
import {getFoodItemsBySellerID} from '../../Utils/storeData.js';

const FoodItemGridStyle = {
  width: '500px',
  margin: '0 auto',
  height: 0


}

class FoodItemGrid extends Component{
  constructor(props) {
    super(props);
    this.state = {
      foodItems : []
    };
  }

  componentDidMount(){
    getFoodItemsBySellerID(this.props.sellerID)
      .then(response => {
        const responseBody = response.data;
        this.setState({foodItems: responseBody.data});
      })
      .catch(error => {

        console.log(error);
      })
  }

  render(){
    const src = 'https://dishes.menu/assets/img/tmp/food_default.jpg';
    const style={margin:5}
    return(
      <div>
        <Card.Group style={FoodItemGridStyle} itemsPerRow={3}>
          {
          this.state.foodItems.map(function(foodItem) {
              return <Card style={style} raised image={src} description={foodItem.name}/>
          })
        }
        </Card.Group>
      </div>
    )
  }
}
export default FoodItemGrid;
