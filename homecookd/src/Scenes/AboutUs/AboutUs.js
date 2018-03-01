import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import './AboutUs.css'
class AboutUs extends Component{
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render(){
    return(
      <div className="container">
        <h2 class="aboutUsTitle">About Us</h2>
        <Paper >
          <p className="aboutUsText">
          Homecookd is an innovative way for you to have a fresh home cooked meal
          delivered to you by people just like yourself. Tired eating the same foods
          from your neighborhood? With Hoomecookd, you can order various types of authentic ethnic foods from
          people who know more about food than fast food restuarants do.
          </p>
        </Paper>
      </div>
    )
  }
}
export default AboutUs
