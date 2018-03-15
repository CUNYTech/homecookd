import React, { Component } from 'react';
import { Image } from 'semantic-ui-react'

class ProfileImage extends Component{
  constructor(props) {
    super(props);
    this.state = {
      source: this.props.source
    };
  }
  render(){
    return(
      <Image src={this.state.source} size='medium' bordered />
    )
  }
}
export default ProfileImage;
