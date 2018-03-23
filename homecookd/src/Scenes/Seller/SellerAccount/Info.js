import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

const extra = (
  <a>
    <Icon name='circle' />
    Now Open
  </a>
)

const Cards = () => (
  <Card
    image='https://react.semantic-ui.com/assets/images/avatar/large/elliot.jpg'
    header='Restaurant Name'
    description='About the chef:'
    extra={extra}
  />
)

export default Cards;
