import React, { Component } from 'react'
import { Button, Modal, Header, Image } from 'semantic-ui-react'
import FoodItemGrid from './FoodItemGrid'
import FoodItemCard from './FoodItemCard'


class FoodGridMagnify extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foodItemName : this.props.foodItemName
    };
  }

  state = { open: false }

  show = size => () => this.setState({ size, open: true })
  close = () => this.setState({ open: false })


  render() {

    return (

        <Modal open={this.props.open} >
          <Modal.Content image>
            <Image wrapped size='medium' src='http://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2017/04/18143835/fc71iy049-02-main.jpg' />

          <Modal.Description>
          <Header>Food Item</Header>
          <p>sjndgjkfdng</p>
          </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={this.props.handleClose} negative>
              Cancel
            </Button>
            <Button positive  content='Add to Cart' />
          </Modal.Actions>
        </Modal>

    )
  }
}

export default FoodGridMagnify
