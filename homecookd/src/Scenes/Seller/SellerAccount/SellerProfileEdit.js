import React,{Component} from 'react';
import TextField from 'material-ui/TextField';
import MenuTable from '../SellerAccount/ProfileMenu.js'
import ProfileEdit from '../SellerAccount/InfoEdit.js'
import MenuCreation from '../SellerAccount/MenuEdit.js'

class TextFieldExampleSimple extends Component {
  render() {

    return (

      <div>

      <MenuTable/>
      <ProfileEdit/>
      <MenuCreation/>

      </div>

    )
  }
}


export default TextFieldExampleSimple;
