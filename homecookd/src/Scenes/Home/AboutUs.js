import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
class AboutUS extends Component{
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render(){
    return(
      <div>
        <h2>About US</h2>
        <Paper >
          <p>
            Lorem Ipsum doler situm
          </p>
        </Paper>
      </div>
    )
  }
}
export default AboutUS;
