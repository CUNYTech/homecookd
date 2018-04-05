import React, { Component } from 'react';
import { Icon, Table, Button} from 'semantic-ui-react'
import {approveSeller,rejectSeller} from '../../../../Utils/admin';
class SellerRow extends Component{
  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleApproveSeller = this.handleApproveSeller.bind(this);
    this.handleRejectSeller = this.handleRejectSeller.bind(this);
    this.approveSeller = approveSeller.bind(this);
    this.rejectSeller = rejectSeller.bind(this);

  }
  handleApproveSeller(e){
    this.approveSeller(localStorage.getItem('api_token'),this.props.seller._id)
      .then(response => {
        alert(response.data.message);
        window.location.reload();

      })
      .catch(error => {
        alert(error.response.data.error);
      })
    e.preventDefault();
  }

  handleRejectSeller(e){
    this.rejectSeller(localStorage.getItem('api_token'),this.props.seller._id)
      .then(response => {
        alert(response.data.message);
        window.location.reload();

      })
      .catch(error => {
        alert(error.response.data.error);
      })
    e.preventDefault();
  }
  render(){
    const ActionButtons = () => (
    this.props.seller.account_approved ? (<Button onClick={this.handleRejectSeller}>Reject</Button>): (<Button onClick={this.handleApproveSeller} positive>Approve</Button>)
  )

    return(
      <Table.Row error={!this.props.seller.account_approved}>
      <Table.Cell>{this.props.seller.business_name}</Table.Cell>
      <Table.Cell>{this.props.seller.email}</Table.Cell>
      <Table.Cell>{this.props.seller.userName}</Table.Cell>

      <Table.Cell>{this.props.seller.name.first} {this.props.seller.name.last}</Table.Cell>

      <Table.Cell>{this.props.seller.reviews.length}</Table.Cell>
      <Table.Cell>{this.props.seller.createDate}</Table.Cell>
      <Table.Cell>{this.props.seller.account_approved ? (<Icon name="check circle"/>,'Approved'): (<Icon name="cancel"/>)}</Table.Cell>
      <Table.Cell><ActionButtons/></Table.Cell>


      </Table.Row>
    )
  }
}
export default SellerRow;
