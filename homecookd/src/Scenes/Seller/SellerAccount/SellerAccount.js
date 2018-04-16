import React, { Component } from 'react';
import Card from '../SellerAccount/Info'
import ButtonExampleSocial from '../SellerAccount/SocialMedia'
import SellerAccountMenu from '../SellerAccount/SellerAccountMenu'

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
<<<<<<< HEAD
=======
        {/* <OrderList /> */}
>>>>>>> 479b16f6d485ae7d9932777eab142207361ebd63
      <header>
        <center><h1>Welcome</h1></center>
      </header>

<<<<<<< HEAD
      <div align= "center">
      <SellerAccountMenu />
      </div>
=======
>>>>>>> 479b16f6d485ae7d9932777eab142207361ebd63

      <center>
         <SellerInfoCard style={{backgroundColor:'red'}}/>
</center>
        <MenuItemBox style={{margin:50}}/>

      <br/><br/><br/>
    {/* <ButtonExampleSocial/>*/}
      </div>
    )
  }
}
export default SellerAccount;
