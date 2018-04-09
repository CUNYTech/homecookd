import React, { Component } from 'react';

class ListFoodItems extends Component{
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    getFoodItemsBySellerID('5aafebcf73ed440b48eb4b6a')
      .then(response => {
        const responseBody = response.data;
        this.setState({foodItems: responseBody.data});
      })
      .catch(error => {
        console.log(error);
      })
  }

  render(){
    return(
      <div>

      </div>
    )
  }
}
export default ListFoodItems;
