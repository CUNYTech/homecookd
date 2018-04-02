import React,{Component} from 'react';
import TextField from 'material-ui/TextField';
import "./SellerProfileEdit.css"

class ProfileEdit extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {

    return (

      <div className = "Profile">
        <h3>Your Account</h3>
        <br/>

        <p>Restaurant Name</p>
        <TextField

        /><br />
        <br />

        <p>Email</p>
        <TextField

        /><br />

        <p>Password</p>
        <TextField
          type="password"
        /><br />

        <p>Address</p>
        <TextField

        /><br />

        <p>City</p>
        <TextField

        /><br />

        <p>State</p>
        <TextField

        /><br />

        <p>Zip Code</p>
        <TextField

        /><br />
      </div>

    )
  }
}


export default ProfileEdit;
