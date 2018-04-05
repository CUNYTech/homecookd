import React, { Component } from 'react';
import {Icon,Button} from 'semantic-ui-react';
import FlatButton from 'material-ui/FlatButton';

class FavoriteStar extends Component{
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render(){
    const style={
    }
    if(this.props.active){
      return(
        <Button style={style} onClick={this.props.onClick} circular icon='star' basic color='yellow'/>
      )
    }else{
      return(
        <Button style={style} onClick={this.props.onClick} circular icon='empty star' basic color='yellow'/>
      )
    }

  }
}
export default FavoriteStar;
