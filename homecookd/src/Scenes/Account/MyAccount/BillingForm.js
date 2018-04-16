import React, { Component } from 'react'
import { Form, Segment } from 'semantic-ui-react'

const States= [
  { key: 'jan', text: 'January' },
  { key: 'feb', text: 'Febuary' },
  { key: 'mar', text: 'March' },
  { key: 'apr', text: 'April' },
  { key: 'may', text: 'May' },
  { key: 'jun', text: 'June' },
  { key: 'jul', text: 'July' },
  { key: 'aug', text: 'August' },
  { key: 'sep', text: 'September' },
  { key: 'oct', text: 'October' },
  { key: 'nov', text: 'November' },
  { key: 'dec', text: 'December' },
]



class Billing extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const style = {
      height: {flex:1},
      width: {flex:2},
      margin: 20,
      padding: 40,
      textAlign: 'center',
      display: '',
      backgroundColor: '#00BCD4'
    }

    //const { value } = this.state
    return (
      <Segment style={style}>
      <Form>
        <Form.Group widths='equal'>
          <Form.Input fluid label='First name' placeholder='First name' />
          <Form.Input fluid label='Last name' placeholder='Last name' />
        </Form.Group>

        <Form.Group widths='equal'>
          <Form.Input fluid label='Address' placeholder='Street Address' />
          <Form.Input fluid label='Apt #' placeholder='Apt #' />
          <Form.Input fluid label='City' placeholder='City' />
          <Form.Select fluid label='State' options={States} placeholder='State' />
          <Form.Input fluid label='Zip Code' placeholder='Zip Code' />
        </Form.Group>

        <Form.Checkbox label='I agree to the Terms and Conditions' />
        <Form.Button>Submit</Form.Button>
      </Form>
      </Segment>
    )
  }
}

export default Billing;
