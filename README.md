# TestOTP---Automated
Automated Mocha test using gulp/gulp-mocha to run on Express route to access a MongoDb document and validate the expectation of the mocha test. The gulp task watches the filesystem to the 'data.xml' file that contains the OTP value.

Sequence
1. Run 'gulp' after starting mongod to listen on port 27017
2. Open data.xml and save to trigger the gulp watch task
