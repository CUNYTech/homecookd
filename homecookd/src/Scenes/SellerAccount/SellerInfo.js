import React, { Component } from 'react'
import { Button, Checkbox, Form, Input, Radio, Select, TextArea } from 'semantic-ui-react'

class Bio extends Component {
  constructor(){
    super();
    this.state = {name: ""};
  }

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
      <Form>
        <Form.Group widths='equal'>
          <Form.Field control={Input} label='Restaurant Name' placeholder={this.state.name} />
        </Form.Group>

        <Form.Field control={TextArea} label='About You' placeholder='Tell us more about your restaurant' />
        <Form.Field control={Button}>Submit</Form.Field>
      </Form>
    )
  }
}

export default Bio;
