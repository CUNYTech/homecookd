import React,{Component} from 'react';
import TextField from 'material-ui/TextField';
import "./SellerProfileEdit.css"

import { Table } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'

class ProfileEdit extends Component {
  constructor(props){
    super(props)
    this.state = {
      Name : '',
      Restaurant:'',
      Email: '',
      Address:'',
      City:'',
      State:'',
      Zip:''

    };

  }
  handleChange = (e, { value }) => this.setState({ value })

  HandleFormSubmission(){

  }

  render() {

    return (
    <div style={{padding: 150}}>

  <Table>
    <Table.Body>
      <Table.Row>
        <Table.Cell>Name:</Table.Cell>
        <Table.Cell><TextField name="Name" autoFocus
          onChange={this.handleFormChange}
        /></Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.Cell>Restaurant Name:</Table.Cell>
        <Table.Cell><TextField name="Restaurant" autoFocus
          onChange={this.handleFormChange}
        /></Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.Cell>Email:</Table.Cell>
        <Table.Cell><TextField name="Email" autoFocus
          onChange={this.handleFormChange}
        /></Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.Cell>Address:</Table.Cell>
        <Table.Cell><TextField name="Address" autoFocus
          onChange={this.handleFormChange}
        /></Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.Cell>City:</Table.Cell>
        <Table.Cell><TextField name="City" autoFocus
          onChange={this.handleFormChange}
        /></Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.Cell>State:</Table.Cell>
        <Table.Cell><TextField name="State" autoFocus
          onChange={this.handleFormChange}
        /></Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.Cell>Zip:</Table.Cell>
        <Table.Cell><TextField name="Zip" autoFocus
          onChange={this.handleFormChange}
        /></Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>

  <Button content='Submit'/>
    </div>
    )
  }
}


export default ProfileEdit;
