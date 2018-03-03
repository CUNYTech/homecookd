import React, { Component } from 'react';


import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';



class SidePanel extends Component{
render(){
return(
    <List>
      <ListItem primaryText="Profile" leftIcon={<ContentInbox />} />
      <ListItem primaryText="Address and phone" leftIcon={<ActionGrade />} />
      <ListItem primaryText="Payments" leftIcon={<ContentSend />} />
    </List>

      )
  }
}

export default SidePanel;
