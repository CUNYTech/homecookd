import React, { Component } from 'react';
import Card from '../SellerAccount/Info'
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
      <header>
        <center><h1>Your Kitchen</h1></center>
      </header>

      <div align= "center">
      <SellerAccountMenu />
      </div>

        <Card/>
      <br/><br/><br/>
      <ButtonExampleSocial/>
      </div>
    )
  }
}
export default SellerAccount;
