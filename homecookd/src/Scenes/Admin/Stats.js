import React, { Component } from 'react';
import {Statistic } from 'semantic-ui-react'

class Stats extends Component{
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render(){
    if(this.props.userCount !== undefined){
      return(
        <Statistic>
          <Statistic.Value>{this.props.userCount}</Statistic.Value>
          <Statistic.Label>Users</Statistic.Label>
        </Statistic>
      )
    }else{
      if(this.props.sellerCount !== undefined){
        return(
          <Statistic>
            <Statistic.Value>{this.props.sellerCount}</Statistic.Value>
            <Statistic.Label>Sellers</Statistic.Label>
          </Statistic>
        )
      }
    }

  }
}
export default Stats;
