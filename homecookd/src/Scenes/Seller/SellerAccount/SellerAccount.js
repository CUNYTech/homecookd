import React, { Component } from 'react';
import OrderList from './OrderList';
import SellerInfoCard from '../SellerAccount/Info'
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
        {/* <OrderList /> */}
      <header>
        <center><h1>Welcome</h1></center>
      </header>


      <center>
         <SellerInfoCard style={{backgroundColor:'red'}}/>
</center>
        <MenuItemBox style={{margin:50}}/>
<<<<<<< HEAD

=======
>>>>>>> f2e9592f11f53137d7dd830f458db9ed10545ff5
      <br/><br/><br/>
    {/* <ButtonExampleSocial/>*/}
      </div>
    );
  }
}
export default SellerAccount;
