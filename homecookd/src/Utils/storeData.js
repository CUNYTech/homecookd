import axios from 'axios';

var baseUrlDomain = 'http://localhost'
const baseUrl = baseUrlDomain +":3001";

export{getFoodItem}
  function getFoodItem(food_id){
    return axios.get(baseUrl + "/api/food/foodID/" + food_id)
  }

export{getFoodItemsBySellerID}
  function getFoodItemsBySellerID(seller_id){
    // console.log(baseUrl + "/api/food/sellerID/" + seller_id)
    return axios.get(baseUrl + "/api/food/sellerID/" + seller_id)
  }

export{getFoodItemsByAPItoken}
  function getFoodItemsByAPItoken(api_token){
    return axios.post(baseUrl + "/api/food/api_token",{
      api_token : api_token
    })
  }
export{getStoreInfoByID}
  function getStoreInfoByID(storeID){
    return axios.get(baseUrl + "/api/seller/sellerID/" + storeID)
  }

  export{updateFoodItem}
    function updateFoodItem(api_token, foodID, foodItem){
      return axios.post(baseUrl + '/api/seller/foodUpdate/' + foodID , {
        api_token : api_token,
        name: foodItem.itemName,
        price: foodItem.price,
        description : foodItem.description,
        image: foodItem.image
      })
    }

    export{newFoodItem}
    function newFoodItem(api_token, foodItem){
      return axios.post(baseUrl + '/api/seller/foodItemCreate', {
        seller_api_token : api_token,
        name: foodItem.itemName,
        price: foodItem.price,
        description : foodItem.description,
        image : foodItem.image
      })
    }

    export{UpdateSellerInfo}
    function UpdateSellerInfo(api_token, requestBody){
      return axios.post(baseUrl + '', requestBody)
    }

    export{createOrder}
      function createOrder(user_api_token, seller_id, foodItems){
        return axios.post(baseUrl + '/api/order/api_token', {
          user_api_token,
          seller_id,
          foodItems
        })
      }

    export {getOrders}
      function getOrders(api_token){
        return axios.post(baseUrl + "/api/auth/information/seller", {
          api_token
        })
      }

    export{getOrderInfo}
      function getOrderInfo(OrderID) {
        return axios.get(baseUrl + '/api/order/orderID/' + OrderID, {
          OrderID
        })
      }

    export{updateOrderStatus}
      function updateOrderStatus(api_token, orderID, orderStatus) {
        return axios.post(baseUrl + '/api/order/update', {
          api_token,
          orderID,
          orderStatus
        })
      }
