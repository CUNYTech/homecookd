import React, { Component } from 'react';
import FoodItemGrid from './FoodItemGrid/FoodItemGrid';
import ButtonExampleLabeledIcon from './CheckOut/CheckOut';
import StoreInfo from './StoreInfo'
import SearchExampleStandard from './StoreSearchBar';

import StoreDescriptionCard from './StoreDescriptionCard';

import {getStoreInfoByID} from '../../Utils/storeData'

class StorePage extends Component{
  constructor(props) {
    super(props);
    this.state = {
      storeData: {
        name: {
          first : "",
          last : ""
        }
      }
    };
  }
  componentDidMount(){
    getStoreInfoByID(this.props.match.params.sellerID)
    .then(response => {
      this.setState({storeData: response.data.data})
    })
    .catch(error => {
      alert(JSON.stringify(error));
    })
  }

  render(){
    return(
      <div>
      <header>
        <center><h1>Place An Order With </h1></center>
      </header>
      <center><SearchExampleStandard/></center>
      <ButtonExampleLabeledIcon/>
      <FoodItemGrid sellerID={this.props.match.params.sellerID}/>
      <StoreDescriptionCard name={this.state.storeData.name} />


      </div>
    )
  }
}
export default StorePage;
