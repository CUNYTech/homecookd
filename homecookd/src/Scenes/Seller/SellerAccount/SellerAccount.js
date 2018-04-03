import React, { Component } from 'react';
import OrderList from './OrderList';
import SellerInfoCard from '../SellerAccount/Info'
import ButtonExampleSocial from '../SellerAccount/SocialMedia'
import SellerAccountMenu from '../SellerAccount/SellerAccountMenu'
import { Card } from 'semantic-ui-react'

import MenuItemBox from './MenuItems/MenuItemBox';
class SellerAccount extends Component{
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount(){
  }
  render(){
    return(
      <div>
        {/* <OrderList /> */}
      <header>
        <center><h1>Your Kitchen</h1></center>
      </header>


      <center>
         <SellerInfoCard style={{backgroundColor:'red'}}/>
</center>
        <MenuItemBox style={{margin:50}}/>
      <br/><br/><br/>
    {/* <ButtonExampleSocial/>*/}
      </div>
    );
  }
}
export default SellerAccount;
