var aws = require('aws-sdk');
var hat = require('hat');
require('dotenv').config(); // Library to allow the importing of  enviromental variables in .env files

var rack = hat.rack(64, 16);

aws.config.update({
  region: 'us-east-1',
  accessKeyId: process.env.AWSAccessKeyId,
  secretAccessKey: process.env.AWSSecretKey
})
const S3_BUCKET = process.env.bucket

exports.sign_s3 = (req,res) => {
  if(req.body.type !== "menu-img" && req.body.type !== "profile-img"){
    res.status(400).json({success:false, error: "Invalid Type"});
  }else{
  const s3 = new aws.S3();
  const fileName = rack();
  const type = req.body.type;
  const fileType = req.body.fileType;
  const key = 'res/' + type + '/' + fileName;

  const s3Params = {
    Bucket: S3_BUCKET,
    Key: key,
    Expires: 500,
    ContentType: fileType,
    ACL: 'public-read'
  };

  s3.getSignedUrl('putObject', s3Params, (err, data) => {
    if(err){
      console.log(err);
      res.json({success: false, error: err})
    }
    const returnData = {
      signedRequest: data,
      url: `https://${S3_BUCKET}.s3.amazonaws.com/${key}`
    };
    res.json({success:true, data:{returnData}});
  });
}
}
