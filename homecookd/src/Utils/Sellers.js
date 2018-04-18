import axios from 'axios';

var baseUrlDomain = 'http://localhost'
const baseUrl = baseUrlDomain +":3001";

export {getSellers};
  function getSellers(){
    return axios.get(baseUrl + "/api/seller/sellers")
    }

export{UpdateSellerInfo}
    function UpdateSellerInfo(api_token, requestBody){
      return axios.post(baseUrl + '/update/account/seller', requestBody)
    }

export{getSellerInfo}
  function getSellerInfo(api_token){
    return axios.post(baseUrl + '/auth/information/seller',)
  }
