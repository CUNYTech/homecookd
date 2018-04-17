import React, { Component } from 'react';
import { Image } from 'semantic-ui-react'

const ProfileImageStyle ={
  margin: 20
}

class ProfileImage extends Component{
  constructor(props) {
    super(props);
    this.state = {
      source: this.props.source
    };
  }
  render(){
    return(
      <Image style={ProfileImageStyle} src={this.state.source} size='medium' bordered />
    )
  }
}
export default ProfileImage;
