import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';

const sellers = [
  {
    id: 0,
    name: 'store1',
    picture: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Central_Department_Store_ZUM_Sofia_20090406_004.JPG',
    description: 'Yummy French food',
    deliveryFee: 'free'
  },
  {
    id: 1,
    name: 'store2',
    picture: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Central_department_store_anchor.JPG',
    description: 'Tasty Italian food',
    deliveryFee: '$1.25'
  },
  {
    id: 2,
    name: 'store3',
    picture: 'https://cdn.shopify.com/s/files/1/0130/8502/files/Center_Store_Interior_1024x1024.jpg?8644751376232999401',
    description: 'Delicious Indian food',
    deliveryFee: '$5.99'
  }
]

const containerStyle = {
  marginTop: '10px'
}

const imageStyle = {
  height: '90px',
  width: '160px'
}

const cardStyle = {
  width: '90%',
  margin: '5px auto',
  border: '1px solid rgba(70, 70, 70, 0.6)'
}

const deliveryFeeStyle = {
  float: 'right'
}

class SellerList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sellers: []
    }
  }

  componentDidMount() {
    this.setState({sellers: sellers})
  }

  render() {
    return (
      <Card.Group style={containerStyle}>
        {
          this.state.sellers.map(seller =>
            <Card style={cardStyle} >
              <Card.Content>
                <Image style={imageStyle} size='small' floated='right' src={seller.picture}/>
                <Card.Header>{seller.name}</Card.Header>
                <Card.Description>{seller.description}</Card.Description>
                <Card.Meta style={deliveryFeeStyle}>{seller.deliveryFee}</Card.Meta>
              </Card.Content>
          </Card>
          )
        }
      </Card.Group>
    )
  }
}

export default SellerList;
