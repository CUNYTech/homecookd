import React, { Component } from 'react'
import { Button, Form, Input, Radio, TextArea } from 'semantic-ui-react'
import ButtonExampleAnimated from '../SellerAccount/UploadButton'
import OperationHours from '../SellerAccount/Time'


class FormExampleFieldControl extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (

      <center><Form>
      <br/>
      <Form.Group inline widths='equal'>
        <Form.Field control={Input} label='Restaurant Name' placeholder='' />
      </Form.Group>

      <br/><br/>

        <Form.Group widths='equal'>
        <Form.Field control={Input} label='Address Line 1' placeholder='Street Address, P.O. Box, Company Name' />
        <Form.Field control={Input} label='Address Line 2' placeholder='Apartment, Suite, Unit, Building, Floor, etc' />
          <Form.Field control={Input} label='Country' placeholder='Country' />
          <Form.Field control={Input} label='State' placeholder='State' />
          <Form.Field control={Input} label='City' placeholder='City' />
          <Form.Field control={Input} label='Zip Code' placeholder='Zip Code' />
        </Form.Group>

        <br/><br/><br/>
        <Form.Group inline>
        <label>Do you want your location to be public or private?</label>
        <Form.Field control={Radio} label='Public' value='1' checked={value === '1'} onChange={this.handleChange} />
        <Form.Field control={Radio} label='Private' value='2' checked={value === '2'} onChange={this.handleChange} />
        </Form.Group>

        <Form.Group inline>
        <label>Are you selling as a restaurant or an individual?</label>
          <Form.Field control={Radio} label='Restaurant' value='3' checked={value === '3'} onChange={this.handleChange} />
          <Form.Field control={Radio} label='Just me' value='4' checked={value === '4'} onChange={this.handleChange} />
          </Form.Group>

          <Form.Group inline>
          <label>Hours of operation:</label>
          <Form.Field label='Sunday' control='input' type='checkbox' />
          <Form.Field label='Monday' control='input' type='checkbox' />
          <Form.Field label='Tuesday' control='input' type='checkbox' />
          <Form.Field label='Wednesday' control='input' type='checkbox' />
          <Form.Field label='Thursday' control='input' type='checkbox' />
          <Form.Field label='Friday' control='input' type='checkbox' />
          <Form.Field label='Saturday' control='input' type='checkbox' />
          </Form.Group>

          <Form.Group inline>
          <OperationHours/>
          </Form.Group>
          <br/>

          <Form.Group inline>
          <label>Which social media accounts do you have? (Its a great way to promote your dishes)</label>
          <Form.Field label='Facebook' control='input' type='checkbox' />
          <Form.Field label='Instagram' control='input' type='checkbox' />
          <Form.Field label='Twitter' control='input' type='checkbox' />
          <Form.Field label='YouTube' control='input' type='checkbox' />
          <Form.Field label='Tumblr' control='input' type='checkbox' />
          </Form.Group>

          <Form.Group inline>
          <br/><br/><br/><br/><br/><br/>
          <ButtonExampleAnimated onClick={this.handleClose} href="/ImageInputDialog"/>
          </Form.Group>


        <Form.Group inline>
        <Form.Field control={TextArea} label='Bio' placeholder='Tell us more about you...' />
        </Form.Group>

        <Form.Group inline>
        <Form.Field control={Button}>Submit</Form.Field>
        </Form.Group>

        <br/>
      </Form></center>
    )
  }
}

export default FormExampleFieldControl
