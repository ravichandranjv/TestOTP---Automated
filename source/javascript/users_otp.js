'use strict';
var MongoClient = require('mongodb').MongoClient;

module.exports={
getUserWithOTP : function (otp) { 
var url = 'mongodb://localhost:27017/mydb';
return MongoClient.connect(url).then(function(db) {
	console.log("Connected");
    var coll=db.collection('users');
return coll.findOne({"otp":otp}).then(function(res){
		return res.otp;
});
});
}
};
