import axios from 'axios';

var baseUrlDomain = 'http://localhost'
const baseUrl = baseUrlDomain +":3001";

export{getFoodItem}
  function getFoodItem(food_id){
    return axios.get(baseUrl + "/api/food/foodID/" + food_id)
  }

export{getFoodItemsBySellerID}
  function getFoodItemsBySellerID(seller_id){
    return axios.get(baseUrl + "/api/food/sellerID/" + seller_id)
  }

export{getFoodItemsByAPItoken}
  function getFoodItemsByAPItoken(api_token){
    return axios.post(baseUrl + "/api/food/api_token",{
      api_token : api_token
    })
  }
