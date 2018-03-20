import React, { Component } from 'react';
import { Table } from 'semantic-ui-react'

class UserRow extends Component{
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render(){
    return(
      <Table.Row>
      <Table.Cell>{this.props.user.userName}</Table.Cell>
      <Table.Cell>{this.props.user.name.first} {this.props.user.name.last}</Table.Cell>
      <Table.Cell>{this.props.user.email}</Table.Cell>
      <Table.Cell>{this.props.user._id}</Table.Cell>
      <Table.Cell>{this.props.user.orders.length}</Table.Cell>
      <Table.Cell>{this.props.user.createDate}</Table.Cell>
      <Table.Cell>{this.props.user.admin  ? ('Admin'): ('Not Admin')}</Table.Cell>

      </Table.Row>
    )
  }
}
export default UserRow;
