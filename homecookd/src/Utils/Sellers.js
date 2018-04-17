import axios from 'axios';

var baseUrlDomain = 'http://localhost'
const baseUrl = baseUrlDomain +":3001";

export {getSellers};
  function getSellers(){
    return axios.get(baseUrl + "/api/seller/sellers")
    }
