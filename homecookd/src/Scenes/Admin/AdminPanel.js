import React, { Component } from 'react';
import UserTable from './Tables/User/UserTable';
import SellerTable from './Tables/Seller/SellerTable';
import Stats from './Stats';

import {getUsers,getSellers} from '../../Utils/admin'
class AdminPanel extends Component{
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      userCount : 0,
      sellers : [],
      sellerCount : 0
    };
    this.getUsers = getUsers.bind(this);
    this.getSellers = getSellers.bind(this);

  }

  componentDidMount(){
    //call our axios promise, then retrieve the token from axios
  this.getUsers(localStorage.getItem('api_token'))
      .then( response => {
        this.setState({users : response.data.response,userCount:response.data.response.length});
      })
      .catch( error => {
        // alert(error.response.data.error);
        if(error.response === undefined){
          this.setState({errorOccured:true,errorMessage:'Couldnt Reach Server'});
        }else{
          this.setState({errorOccured:true,errorMessage:error.response.data.error});
        }

        // alert(error);
        // this.OpenPopUp();
      })

      this.getSellers(localStorage.getItem('api_token'))
          .then( response => {
            this.setState({sellers : response.data.response,sellerCount:response.data.response.length});
          })
          .catch( error => {
            // alert(error.response.data.error);
            if(error.response === undefined){
              this.setState({errorOccured:true,errorMessage:'Couldnt Reach Server'});
            }else{
              this.setState({errorOccured:true,errorMessage:error.response.data.error});
            }

            // alert(error);
            // this.OpenPopUp();
          })
  }


  render(){
    const style = {
      margin:50
    }
    return(
      <div style={style}>
      <h1 style={{textAlign:'center'}}>ADMIN Panel</h1>
      <Stats userCount = {this.state.userCount}/>
      <UserTable users ={this.state.users}/>
      <Stats sellerCount = {this.state.sellerCount}/>
      <SellerTable sellers = {this.state.sellers}/>
      </div>
    )
  }
}
export default AdminPanel;
