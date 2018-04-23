import React, { Component } from 'react';
import {Card,Button} from 'semantic-ui-react'
import {getFoodItemsBySellerID} from '../../../Utils/storeData.js';
import FoodGridMagnify from './FoodGridMagnify'
import FoodItemCard from './FoodItemCard';

const FoodItemGridStyle = {
  width: '500px',
  margin: '0 auto',
  height: 0


}

class FoodItemGrid extends Component{
  constructor(props) {
    super(props);
    this.state = {
      foodItems : [],
      open: false,
      count : 0,
      FoodItemGrid: []
    };
    this.toggleModal = this.toggleModal.bind(this);
  }
  toggleModal = () => {
    this.setState({open: !this.state.open})
  }
  handleClose = () => {
    this.setState({open : false})

  }

  componentDidMount(){
    getFoodItemsBySellerID(this.props.sellerID)
      .then(response => {
        const responseBody = response.data;
        this.setState({foodItems: responseBody.data});
        var FoodItemGrid = [];
        for(var i = 0; i<this.state.foodItems.length; i++){
          FoodItemGrid.push(
            <FoodItemCard
              onClick={this.toggleModal}
              key={this.state.foodItems[i]._id}
              id={this.state.foodItems[i]._id}
              foodItemName={this.state.foodItems[i].name}
            />)
        }
        this.setState({FoodItemGrid: FoodItemGrid});
      })
      .catch(error => {
        console.log(error);
      })
  }



  render(){
    var FoodItemGrid = []

    const src = 'https://dishes.menu/assets/img/tmp/food_default.jpg';
    const style={margin:5}
    return(
      <div>
        {/* <FoodGridMagnify open={this.state.open} handleClose={this.handleClose}/> */}
        <Card.Group style={FoodItemGridStyle} itemsPerRow={3}>
          {this.state.FoodItemGrid}
        </Card.Group>
      </div>
    )
  }
}
export default FoodItemGrid;
