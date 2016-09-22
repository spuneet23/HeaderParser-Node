var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var moment = require('moment');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get('/',function(req,res){
  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
 
  res.send("IP Address:"+ip);
});


var port = Number(process.env.PORT || 3000);
app.listen(port, function(){
  console.log("Server running on Port: "+port);
});