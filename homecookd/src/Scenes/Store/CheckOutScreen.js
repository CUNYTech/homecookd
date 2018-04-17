import React, { Component } from 'react'
import { Button, Modal, Header, Image, Item } from 'semantic-ui-react'
import CheckOut from './CheckOut'

class CheckOutScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  state = { open: false }

  show = size => () => this.setState({ size, open: true })
  close = () => this.setState({ open: false })


  render() {

    return (

        <Modal open={this.props.open} >
          <Modal.Content scrolling>
            <Item.Group relaxed divided unstackable>
      <Item>
        <Item.Image size='small' src='http://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2017/04/18143835/fc71iy049-02-main.jpg' />

        <Item.Content verticalAlign='middle'>
          <Item.Header>Content A</Item.Header>
          <Item.Description>paragraph</Item.Description>
          <Item.Extra>
            <Button floated='right' negative>
              Cancel Item
            </Button>
          </Item.Extra>
        </Item.Content>
      </Item>


    <Item>
      <Item.Image size='small' src='http://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2017/04/18143835/fc71iy049-02-main.jpg' />

      <Item.Content verticalAlign='middle'>
        <Item.Header>Content B</Item.Header>
        <Item.Description>paragraph</Item.Description>
        <Item.Extra>
          <Button floated='right' negative>
            Cancel Item
          </Button>
        </Item.Extra>
      </Item.Content>
    </Item>

    <Item>
      <Item.Image size='small' src='http://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2017/04/18143835/fc71iy049-02-main.jpg' />

      <Item.Content verticalAlign='middle'>
        <Item.Header>Content B</Item.Header>
        <Item.Description>paragraph</Item.Description>
        <Item.Extra>
          <Button floated='right' negative>
            Cancel Item
          </Button>
        </Item.Extra>
      </Item.Content>
    </Item>

      </Item.Group>
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={this.props.handleClose} negative>
              Exit
            </Button>
            <Button positive icon='checkmark' labelPosition='right' content='Check Out' />
          </Modal.Actions>
        </Modal>

    )
  }
}

export default CheckOutScreen
