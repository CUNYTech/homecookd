import React, { Component } from 'react';

import Card from '../SellerAccount/Info'

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
        <center><h1>Welcome to:</h1></center>
      </header>

        <Card/>

      </div>
    )
  }
}
export default SellerAccount;
