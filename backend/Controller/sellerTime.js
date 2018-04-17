var Seller = require("../Models/sellerSchema");

// from the seller api, find the id and store those there
exports.scheduleCreate = (req, res) => {
	if(req.body.seller_api_token === undefined || req.body.seller_api_token === ""){
		res.status(400).json({error:"Missing api_token"});
		return;
	} 
	Seller.find( {api_token: req.body.seller_api_token}, function (err, docs){
		res.status(401).json ({error: "Could not find seller"});
		else{
			var tempSchedule = new schedule();
			tempSchedule.name = req.body.name;
			var tempSchedule_id = tempSchedule.id;
				if(err) {
					console.log("Error while saving to the database");
				else {
					openingClosingTime(tempSchedule.seller_id, tempSchedule_id, res);
				}
			}
		}
	});
}


function openingClosingTime(seller_id, tempSchedule_id, res, req){
    Seller.update({ _id: seller_id}), { $push: {schedule_time: tempSchedule_id} },
    function(err, numAffected, rawResponse) {
    	if(err) {
    		res.status(400).json("Contact addMsg error" + err);
    		else {
    			res.status(201);
    			res.json({message: "Succesfully registered", _id: tempSchedule_id});
    		}
    	}
    }
}