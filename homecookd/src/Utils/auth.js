import axios from 'axios';

var baseUrlDomain = 'http://localhost'
const baseUrl = baseUrlDomain +":3001";

export {registerCustomer};
  function registerCustomer(email,userName,password, firstName, lastName){
    return axios.post(baseUrl + "/api/register", {
      email: email,
      userName: userName,
      password: password,
      name: {
        first: firstName,
        last: lastName
      }
    })
    // .then(response => response.data.api_token)
    // .catch(error => error);
  }
