import React, { Component } from 'react';
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
    const style = {
      margin:50
    }
    return(
      <div style={style}>
      <MenuItemBox/>
      </div>
    )
  }
}
export default SellerAccount;
