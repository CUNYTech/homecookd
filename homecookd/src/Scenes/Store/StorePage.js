import React, { Component } from 'react';
import { Card, Icon } from 'semantic-ui-react'
import FoodItemGrid from './FoodItemGrid';
import ButtonExampleLabeledIcon from './CheckOut';
import StoreInfo from './StoreInfo'

const extra = (
  <a>
    <Icon name='circle' />
    Now Open
  </a>
)
const edit = (
  <a onClick={this.handleClose} href="/SellerProfileEdit">
  <Icon name ='edit' />
  Edit Profile
  </a>
)
const Cards = () => (
  <Card
    image='https://react.semantic-ui.com/assets/images/avatar/large/elliot.jpg'
    edit={edit}
    header='Restaurant Name'
    description='About the chef:'
    extra={extra}>
  </Card>


)




class StorePage extends Component{
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render(){
    return(
      <div>
      <header>
        <center><h1>Place An Order With </h1></center>
      </header>
      <center>
      <Cards />
      </center>
      <FoodItemGrid />



      </div>
    )
  }
}
export default StorePage;
