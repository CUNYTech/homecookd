import axios from 'axios';

var baseUrlDomain = 'http://localhost'
const baseUrl = baseUrlDomain +":3001";

export{getSignedUrl}
  function getSignedUrl(fileName, fileType,type){
    return axios.post(baseUrl + "/api/sign_s3/",{
      fileName: fileName,
      fileType: fileType,
      type : type
    })
  }

export{uploadFile}
  function uploadFile(destination,file,options){
    return axios.put(destination,file,options)
  }
