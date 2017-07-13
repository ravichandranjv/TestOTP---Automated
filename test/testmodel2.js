var chai = require('chai'),expect = chai.expect,xml2js = require('xml2js'),request = require('supertest'),fs=require('fs');
var otpFromXml;
describe('Verifying a OTP', function () { 
	var server;	
	beforeEach(function () {
		server = require('../server').server;
	});

	it('checks if OTP is correct', function (done) {
		// Checking the OTP with the db
		var parser = new xml2js.Parser();
		fs.readFile('data/data.xml', function(err, data) {
    			parser.parseString(data, function (err, result) {        
			otpFromXml=result;
			//console.log(otpFromXml);
    			});
		});

	request(server)
                .get('/about/1234')
		.expect(200)
                .end(function (error, response) {
                    if (error){ 
			done();
			}
			else{			
		    	expect('1234').equals(response.body.otp);			
                    	done();
			}
                });	
	});    
});