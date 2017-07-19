var express = require('express');
var app     = express();
var port    =   process.env.PORT || 8080;
var router=express.Router;
var users=require('./source/javascript/users_otp.js');

app.route('/about/:otp')
.get(function(req,res){
    users.getUserWithOTP(req.params.otp).then(function(items) {
      res.json({        
        "otp":items
      });
    },function(err){
});
});
app.use('/',router);
app.listen(port);
//console.log('Server listening on port ' + port);
module.exports.server=app;
