import React, { Component } from 'react'
import { Card, Icon, Accordion} from 'semantic-ui-react'
import AccordionExampleStandard from './Accordion'


const extra = (
  <a handleClick={()=>{this.AccordionExampleStandard()}}>
    <Icon name='circle' />
    Now Open
  </a>
)
const edit = (
  <a onClick={this.handleClose} href="/SellerProfileEdit">
  <Icon name ='edit' />
  Edit Profile
  </a>
)
const Cards = () => (
  <Card
    image='https://react.semantic-ui.com/assets/images/avatar/large/elliot.jpg'
    header='Restaurant Name'
    description='About the chef:'
    extra={extra}>
  </Card>


)

export default Cards;
