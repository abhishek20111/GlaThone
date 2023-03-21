
const express = require('express');
const router = express.Router();
const request = require('sync-request'); 
const port = 8080;


function Output(success = false, message = null, data = null) {
	this.success = success;
	this.message = message;
	this.data = null; 
} 


function CheckUserPhone(phone) {
	// var key = 'Oc6MayXOMG3aJcbv5jj6GjU3HwTSVc3D';sDbjd6FTxl4IAVuvpmyvY4eKeL1H8VYM
	var key = 'Oc6MayXOMG3aJcbv5jj6GjU3HwTSVc3D';// aditya key
	var url = "https://www.ipqualityscore.com/api/json/phone/" + key + "/" + phone;
     
	var result = get_IPQ_URL(url);
	if (result !== null) {
        console.log(result);
		return result;
	}
	else {
		// Throw error, no response received.
        console.log("error in api.js");
	}
}


function get_IPQ_URL(url) {
	try {
		var response = request('GET', url);
		return JSON.parse(response.getBody());
	}
	catch (error) {
		return null;
	}
}

function ValidPhone(phone) {
	var phone_result = CheckUserPhone(phone);
	
	if (phone_result !== null) {
		if (typeof phone_result !== 'undefined' && phone_result['valid'] === true) {
			return true;
		}
	}
		 
	return false;
}

router.get('/api_no', (req, res) => {
    var phone = req.query.phone;
     
	console.log(phone); 
	if (ValidPhone(phone) === false) {
		return res.send(new Output(true, '1'));
	}
	else { 
		return res.send(new Output(true, '0'));
	}
});


module.exports = router;

