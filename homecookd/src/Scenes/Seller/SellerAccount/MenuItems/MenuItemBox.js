import React, { Component } from 'react';
import {Segment, Menu, Dropdown, Icon} from 'semantic-ui-react';
import MenuItem from './MenuItem';
import {getFoodItemsBySellerID} from '../../../../Utils/storeData';

class MenuItemBox extends Component{
  constructor(props) {
    super(props);
    this.state = {
      foodItems : []
    };
  }
  componentDidMount(){
    getFoodItemsBySellerID('5aafebcf73ed440b48eb4b6a')
      .then(response => {
        const responseBody = response.data;
        alert(JSON.stringify(responseBody));
        this.setState({foodItems: responseBody.data});
      })
      .catch(error => {
        alert(error);
      })
  }

  render(){
    return(
      <div>
      <h1>Menu Items</h1>
      <Menu attached='top'>
      <Dropdown item icon='plus' simple/>


      <Menu.Menu position='right'>
        <div className='ui right aligned category search item'>
          <div className='ui transparent icon input'>
            <input className='prompt' type='text' placeholder='Search Menu Items...' />
            <i className='search link icon' />
          </div>
          <div className='results' />
        </div>
      </Menu.Menu>
    </Menu>
      <Segment style={{overflow: 'auto', maxHeight: 200 }} attached='bottom'>
      {
              this.state.foodItems.map(function(foodItem) {
                  return <MenuItem foodItem={foodItem}/>
              })
          }

      </Segment>
      </div>
    )
  }
}
export default MenuItemBox;
