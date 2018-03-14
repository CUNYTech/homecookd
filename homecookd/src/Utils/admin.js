import axios from 'axios';

var baseUrlDomain = 'http://localhost'
const baseUrl = baseUrlDomain +":3001";


  export {loginAdmin};
    function loginAdmin(email,password){
      return axios.post(baseUrl + "/sudoApi/auth/admin/login", {
        email: email,
        password: password
      })
      }
      // .then(response => response.data.api_token)
      // .catch(error => error);
  export {getUsers};
    function getUsers(api_token){
      return axios.post(baseUrl + "/sudoApi/admin/getUsers", {
        api_token: api_token
      })
      }
  export {getSellers};
    function getSellers(api_token){
      return axios.post(baseUrl + "/sudoApi/admin/getSellers", {
        api_token: api_token
      })
      }

  export{approveSeller};
    function approveSeller(api_token,seller_id){
      return axios.post(baseUrl + "/sudoApi/admin/approveSeller",{
        api_token: api_token,
        seller_id: seller_id
      })
    }
    
    export{rejectSeller};
      function rejectSeller(api_token,seller_id){
        return axios.post(baseUrl + "/sudoApi/admin/rejectSeller",{
          api_token: api_token,
          seller_id: seller_id
        })
      }
