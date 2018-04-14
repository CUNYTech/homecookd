var Seller = require("../Models/sellerSchema");

exports.getAllSeller = (req, res) =>{
    Seller.find({},'-password_hash -account_approved -email -createDate', function(err,docs){
        if(!docs || err){
          res.status(400).json( {success: false, message: "No seller found"} );
        }else{
          res.status(200).json( {success: true, message: "Successfuly Found Sellers",data:{sellers: docs}});
        }
    })
}