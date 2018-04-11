import { WorkDocs } from "aws-sdk";
var aws = require('aws-sdk');

var s3 = new aws.S3();


  exports.sign_s3 = (req,res) => {
    console.log("err");
      const fileName = req.body.fileName;
      const fileType = req.body.fileType;
      const s3Params = {
          Bucket : process.env.bucket,
          key: fileName,
          Expires : 50,
          ContentType : fileType,
          ACL: 'public-read'
      }
      s3.getSignedUrl('putObject', s3Params, (err,data)=>{
          if(err){
              console.log(err);
              res.end();
          }
          const returnData = {
              signedRequest : data,
              url : `https://${process.env.bucket}.s3.amazonaws.com/${fileName}`
          }
          res.json({success : true, data: {returnData}})
          
      })
  }