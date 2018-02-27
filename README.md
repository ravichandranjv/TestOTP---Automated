# TestOTP---Automated - this repo uses TravisCI and CodeCov for build and code coverage - 

Build Status - [![Build Status](https://travis-ci.org/ravichandranjv/TestOTP---Automated.svg?branch=master)](https://travis-ci.org/ravichandranjv/TestOTP---Automated)

Base branch coverage
[![Coverage Status](https://codecov.io/gh/ravichandranjv/TestOTP---Automated/badge.svg?branch=master)](https://codecov.io/gh/ravichandranjv/TestOTP---Automated?branch=master)
Sub branch coverage
[![Coverage Status](https://codecov.io/gh/ravichandranjv/TestOTP---Automated/badge.svg?branch=ravichandranjv-patch-1-travis-cache)](https://codecov.io/gh/ravichandranjv/TestOTP---Automated?branch=ravichandranjv-patch-1-travis-cache)

The build errored due to a timeout event. The same works fine when the repo is cloned.
In continuation of the test OTP scenario - https://github.com/ravichandranjv/TestOTP-A-leaner-version---semi-automated

Automated Mocha test using gulp/gulp-mocha to run on Express route to access a MongoDb document and validate the expectation of the mocha test. The gulp task watches the filesystem to the 'data.xml' file that contains the OTP value.

Sequence
1. Run 'gulp' after starting mongod to listen on port 27017
2. Open data.xml and save to trigger the gulp watch task

Watch for the next - "Automated to trigger test based on time/timestamp"
