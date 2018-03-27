import React, { Component } from 'react';
import axios from 'axios';
import { Divider, Segment } from 'semantic-ui-react';
import './OrderList.css';

const url = 'http://localhost:3001/api';
const api_token = localStorage.getItem('api_token');
var sellerOrders = ['order1', 'order2'];

function getOrders(api_token){
  return axios.post(url + "/auth/information/seller", {
    api_token
  })
  .then(function(response) {
    console.log(response.data);
  })
}

const orderListSegmentStyle = {
  backgroundColor: 'rgb(247, 247, 247)'
}

class OrderList extends Component {
  constructor(props){
    super(props);
    this.state = {
      orders: []
    };
  }

  componentDidMount() {
    getOrders(api_token);
    this.setState({orders: sellerOrders}); //change to response.data.orders later
  }

  render() {
    return (
      <div className="orderListStyle">
        <Segment style={orderListSegmentStyle}>
          {
            this.state.orders.map((order, i) => <div className="itemStyle" key={i}>{order}<Divider segment/></div>)
          }
        </Segment>
      </div>
    )
  }
}

export default OrderList;
