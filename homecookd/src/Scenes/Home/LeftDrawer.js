import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';


class LeftDrawer extends React.Component {

    constructor(props) {
        super(props);
        state:{
          open:this.props.open
        }
    }

    render() {
        return (
            <div>
                <Drawer open={this.state.open}>
                    <MenuItem>Menu Item 1</MenuItem>
                    <MenuItem>Menu Item 2</MenuItem>
                </Drawer>
            </div>
        );
    }
}

export default LeftDrawer;
