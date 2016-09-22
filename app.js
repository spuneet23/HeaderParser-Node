var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var moment = require('moment');
var locale = require('locale');
var supported = ["en", "en_US", "ja"];
var useragent = require('useragent');

app.use(locale(supported));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get('/',function(req,res){
  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  var lang = req.headers['accept-language'];
  var user = req.headers['user-agent'];
  var agent = useragent.parse(req.headers['user-agent']);
  var headers= {
  	"IP Address":ip,
  	"Lang":req.locale,
  	"Software":agent.os.family
  };
   var final=JSON.stringify(headers);
   res.send(final);
  // res.send("IP Address: "+ip+"      Lang: "+req.locale+"     User-agent:"+agent.os);
});


var port = Number(process.env.PORT || 3000);
app.listen(port, function(){
  console.log("Server running on Port: "+port);
});