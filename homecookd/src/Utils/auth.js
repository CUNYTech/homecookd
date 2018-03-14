import axios from 'axios';

var baseUrlDomain = 'http://localhost'
const baseUrl = baseUrlDomain +":3001";

export {registerCustomer};
  function registerCustomer(email,userName,password, firstName, lastName){
    return axios.post(baseUrl + "/api/auth/register/user", {
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

  export {registerSeller};
    function registerSeller(email,userName,password, firstName, lastName){
      return axios.post(baseUrl + "/api/auth/register/seller", {
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

  export {loginCustomer};
    function loginCustomer(email,password){
      return axios.post(baseUrl + "/api/loginUser", {
        email: email,
        password: password
      })
      }
      // .then(response => response.data.api_token)
      // .catch(error => error);
