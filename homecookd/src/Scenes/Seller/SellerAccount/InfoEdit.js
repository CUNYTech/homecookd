import React,{Component} from 'react';
import TextField from 'material-ui/TextField';
import "./SellerProfileEdit.css"
import {UpdateSellerInfo} from "../../../Utils/storeData"

import { Table } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'

class ProfileEdit extends Component {
  constructor(props){
    super(props)
    this.state = {
      Name: '',
      Restaurant:'',
      Email: '',
      Address:'',
      City:'',
      State:'',
      Zip:''

    };

  }
  handleChange = (e, { value }) => this.setState({ value })

  HandleFormSubmission(e){
    const Name = this.state.Name;
    const Restaurant = this.state.Restaurant;
    const Email = this.state.Email;
    const Address = this.state.Address;
    const City = this.state.City;
    const State = this.state.State;
    const Zip = this.state.Zip;

    const requestBody = {name: this.state.Name, restaurant: this.state.Restaurant, email: this.state.Email,
    address: this.state.Address, city: this.state.City, state: this.state.State, zip: this.state.Zip}

    UpdateSellerInfo(localStorage.getItem('api_token'),requestBody)
    .then(response => {

    })
    .catch(error => {

    })
    e.preventDefault;
  }

  render() {

    return (
    <div style={{padding: 150}}>
<center><h2>Edit Account Page</h2></center>
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

  <Button content='Submit' onClick = "HandleFormSubmission"/>
    </div>
    )
  }
}


export default ProfileEdit;
