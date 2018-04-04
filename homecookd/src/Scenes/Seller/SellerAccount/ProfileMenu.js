import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';


class MenuTable extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const style = {
      display: 'inline-block',
      margin: '16px 16px 0',
      padding: '20px',
      textAlign: 'left',
      backgroundColor:'red',
    };


    return (


  <div>
    <Paper style={style}>
      <Menu>
        <MenuItem primaryText="Profile" />
        <MenuItem primaryText="Menu" />
        <MenuItem primaryText="Orders" />
        <MenuItem primaryText="Sign out" />
      </Menu>
    </Paper>
  </div>
);
}
}


export default MenuTable;
