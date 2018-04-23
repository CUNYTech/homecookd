import React, {Component}from 'react'
import { Button, Icon} from 'semantic-ui-react'
import CheckOutScreen from './CheckOutScreen'

const RightAlignPage = {

  width: 'auto',
  marginRight: 50,
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'flex-end',
  alignSelf: 'flex-end',
  flexDirection: 'column'
}

class CheckOut extends Component{
  constructor(props) {
    super(props);
    this.state = {
    };
    this.toggleModal = this.toggleModal.bind(this);
  }
  toggleModal = () => {
    this.setState({open: !this.state.open})
  }
  handleClose = () => {
    this.setState({open : false})
  }

  render(){
    return (
      <div style={RightAlignPage}>
      <CheckOutScreen seller_id={this.props.seller_id} open={this.state.open} handleClose={this.handleClose}/>
        <Button compact onClick={this.toggleModal} color='blue'>
          Check Out
          <Icon name='shopping cart'/>
        </Button>
      </div>
    )
  }
}

export default CheckOut;
