var Seller = require("../Models/sellerSchema");
var foodType = require("../Models/foodTypeSchema");


exports.searchBar = (req,res) => {
  if(req.body.search === undefined || req.body.search === ""){
    res.status(400).json({error: "Nothing to search"});
  }
  Seller.find( {$or: [{business_name:{$regex:new RegExp(req.body.search, "i")}},
  {business_type: {$regex : new RegExp(req.body.search)}}]}
  ,
  '-password_hash -email -api_token -email -createDate -account_approved'
  ,
  function (err, seller){
    if (!seller || err){
      res.status(401).json( {error: "Could not find any business or food type with this name"});
    }else{
      res.status(200).json( {success:true, data:seller} );
    }
  });

}
