import React from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

import Divider from 'material-ui/Divider';


const style = {
  paper: {
    display: 'inline-block',
    float: 'left',
    margin: '16px 32px 16px 0',
  },
  rightIcon: {
    textAlign: 'center',
    lineHeight: '24px',
  },
};

const MenuIcons = () => (
  <div>
    <Paper style={style.paper}>
      <Menu>
        <MenuItem primaryText="Preview" />
        <Divider />
        <MenuItem primaryText="Back to Page" />
        <Divider />
        <MenuItem primaryText="Get links"  />
      </Menu>
    </Paper>
  </div>
);

export default MenuIcons;
