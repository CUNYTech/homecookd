import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

export default class DrawerUndockedExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    return (
      <div>
        <RaisedButton
          label="HomeCookd"
          onClick={this.handleToggle}
        />
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem onClick={this.handleClose}>Home</MenuItem>
          <MenuItem onClick={this.handleClose}>Order</MenuItem>
          <MenuItem onClick={this.handleClose}>Menu</MenuItem>
          <MenuItem onClick={this.handleClose}>Location</MenuItem>
          <MenuItem onClick={this.handleClose}>Refresh</MenuItem>
          <MenuItem onClick={this.handleClose} href="/AboutUs" >About Us</MenuItem>
          <MenuItem onClick={this.handleClose}>Help</MenuItem>
          <MenuItem onClick={this.handleClose}>Sign Out</MenuItem>

        </Drawer>
      </div>
    );
  }
}
