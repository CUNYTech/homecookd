import React, { Component } from 'react';
import SellerRow from './SellerRow';

import { Table } from 'semantic-ui-react'

class SellerTable extends Component{
  constructor(props) {
    super(props);
    this.state = {
      sellers : this.props.sellers
    };

  }


  render(){

    
    return(
      <div>

      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Seller Business Name</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>User Name </Table.HeaderCell>
            <Table.HeaderCell>Owner Name </Table.HeaderCell>
            <Table.HeaderCell>Reviews</Table.HeaderCell>
            <Table.HeaderCell>Created Date</Table.HeaderCell>
            <Table.HeaderCell>Account Approval Status</Table.HeaderCell>
            <Table.HeaderCell>Actions</Table.HeaderCell>

          </Table.Row>
        </Table.Header>
        {
                this.props.sellers.map(function(seller) {
                    return <SellerRow seller={seller}/>
                })
            }
      </Table>
      </div>
    )
  }
}
export default SellerTable;
