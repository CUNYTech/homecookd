import React, { Component } from 'react';
import OrderList from './OrderList';
import SellerInfoCard from '../SellerAccount/Info'
import ButtonExampleSocial from '../SellerAccount/SocialMedia'
import SellerAccountMenu from '../SellerAccount/SellerAccountMenu'

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
      

<<<<<<< HEAD
      <div align= "center">
      <SellerAccountMenu />
      </div>
=======
        <SellerInfoCard/>
>>>>>>> 5ca969e6659ef9fa1847b8787fc98413a930d23d

        <Card/>
      <br/><br/><br/>
      <ButtonExampleSocial/>
      </div>
    );
  }
}
export default SellerAccount;
