import React, { Component } from 'react';
import { Button, Modal, Header, Image, Item } from 'semantic-ui-react';
import CheckOut from './CheckOut';
import CheckOutItem from './CheckOutItem';
import { connect } from 'react-redux';

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
            {
              this.props.cart.cart.map(order =>
                <CheckOutItem key={order} orderId={order} />
              )
            }
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


const mapStateToProps = (reduxState) => {
  return{
    cart: reduxState.cart
  }
}

export default connect(mapStateToProps)(CheckOutScreen);
