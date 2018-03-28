import React, { Component } from 'react';
import {Modal,Button,Image,Header, Input,Label, TextArea,Icon} from 'semantic-ui-react'
class MenuItemModal extends Component{
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      itemName:this.props.food.name,
      price: this.props.food.price
    };
    this.handleFormChange = this.handleFormChange.bind(this);
  }


    handleOpen = () => this.setState({ modalOpen: true })

    handleClose = () => this.setState({ modalOpen: false })

    handleFormChange(e){
        const value = e.target.value;
        const name = e.target.name;
        this.setState({[name]: value})
    }


  render(){
    return(
      <Modal trigger={<Button floated="right" icon = 'edit' onClick={this.handleOpen}  closeOnEscape={this.handleClose}/>} open={this.state.modalOpen}>
   <Modal.Header>Edit {this.state.itemName}</Modal.Header>
   <Modal.Content image>
     <Image wrapped size='medium' src='https://image.freepik.com/free-icon/restaurant-cutlery-circular-symbol-of-a-spoon-and-a-fork-in-a-circle_318-61086.jpg' />
     <Modal.Description>
       <Header><Input value={this.state.itemName} onChange={this.handleFormChange} name='itemName'  transparent placeholder='Name of this item' /></Header>
       <Input style={{ width:500}} transparent placeholder='Describe your item' />
       <br/>

       <Input style={{paddingTop: 200,width:80,float:'right'}} name="priceDollar" value={this.state.price} labelPosition='right' type='text' placeholder='Price'>
       <Label basic>$</Label>
       <input />

       </Input>
     </Modal.Description>
   </Modal.Content>
   <Modal.Actions>
      <Button onClick={this.handleClose} color='red'>
        <Icon name='remove' /> Cancel
      </Button>
      <Button color='green'>
        <Icon name='checkmark' /> Save
      </Button>
    </Modal.Actions>
   </Modal>

    )
  }
}
export default MenuItemModal;
