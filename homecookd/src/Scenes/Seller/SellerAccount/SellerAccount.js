import React, { Component } from 'react';
import OrderList from './OrderList';
import SellerInfoCard from '../SellerAccount/Info'
import ButtonExampleSocial from '../SellerAccount/SocialMedia'

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
        <OrderList />
      <header>
        <center><h1>Your Kitchen</h1></center>
      </header>

        <SellerInfoCard/>

      <br/><br/><br/>
      <ButtonExampleSocial/>

  }

}
export default SellerAccount;
