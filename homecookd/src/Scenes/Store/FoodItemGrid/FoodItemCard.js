import React, {Component} from 'react';
import {Card} from 'semantic-ui-react';


class FoodItemCard extends Component{
  constructor(props) {
    super(props);
    this.state = {
      foodItemName : this.props.foodItemName,
      openMagnify : false
    };
  }
  render(){
    return(

      <Card onClick={this.props.onClick} raised image={'http://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2017/04/18143835/fc71iy049-02-main.jpg'} description={this.state.foodItemName}></Card>

    )
  }
}
export default FoodItemCard;
