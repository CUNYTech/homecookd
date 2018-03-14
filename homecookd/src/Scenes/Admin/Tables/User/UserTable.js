import React, { Component } from 'react';
import UserRow from './UserRow';

import { Icon, Label, Menu, Table } from 'semantic-ui-react'

class UserTable extends Component{
  constructor(props) {
    super(props);
    this.state = {
      users : this.props.users
    };

  }


  render(){

    this
    return(
      <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>User Name</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>_id</Table.HeaderCell>
            <Table.HeaderCell>Orders</Table.HeaderCell>
            <Table.HeaderCell>Created Date</Table.HeaderCell>
            <Table.HeaderCell>Admin</Table.HeaderCell>

          </Table.Row>
        </Table.Header>
        {
                this.props.users.map(function(user) {
                    return <UserRow user={user}/>
                })
            }
      </Table>
      </div>
    )
  }
}
export default UserTable;
