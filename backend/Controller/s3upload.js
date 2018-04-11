var AWS = require('aws-sdk');
var s3 = new AWS.S3({
  signatureVersion: 'v4',
});

exports.sign_s3 = (req,res) => {
    const fileName = req.body.fileName;
    const fileType = req.body.fileType;
    console.log(process.env.bucket);
    console.log(req.body);
    const s3Params = {
        Bucket : process.env.bucket,
        key: fileName,
        Expires : 50,
        ContentType : fileType,
        ACL: 'public-read'
    }
    console.log(s3Params);
    s3.getSignedUrl('putObject', s3Params, (err,data)=>{
        console.log(data);
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