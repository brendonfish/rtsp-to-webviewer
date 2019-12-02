
// App init from Express
const { exec } = require('child_process');
const express = require("express");
const path = require("path");
const fs = require('fs');
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 8080;
const sysCfg = {};

app.use(express.static(path.join(__dirname+'/public')));

app.use(function(req, res, next){
  if (req.is('application/json')) {
    req.text = '';
    req.setEncoding('utf8');
    req.on('data', function(chunk){ req.text += chunk });
    req.on('end', next);
  } else {
    next();
  }
});

// Register Routes
var router = express.Router();

router.route('/faceEvent')
	.post( function(req, res){
		var body = JSON.parse(req.text);
		console.log(req.body);
		res.json({message:body.name});
	})

	.get( function(req, res){
		res.json({message:'simple get'});
	});

router.route('/faceEvent/:faceID')
	.get( function(req, res){
		res.json({message:req.params.faceID});
	});


router.route('/wifiConfig')
	.get(function(req, res) {
		res.json({ssid:"dummySSID", password:"dummyPass"});
	})

	.put(function(req, res){
		res.json({});
	});

router.route('/passcode')
	.put(function(req, res){
		res.json({});
	});

router.route('/streamConfig')
	.get(function(req, res){
		res.json(
			[

				{
					stream_id : "{url}", username: "{username}", password : "{password}", uri: "{uri}",
					face_roi: {
					    position:{},
					    size:{} 
					},
					inflowLine: {
						start:{ }, end:{  }
					},
					vector:{
						x:{}, y:{}
					} 
				}
			]
		);
	})

	.post(function(req, res){
		res.json({});
	})

	.put(function(req, res){
		res.json({});
	});

router.route('/face')
	.post(function(req, res){
		res.json({});
	})
	.put(function(req, res){
		res.json({});
	});



router.route('/img/:imgToken')
	.get(function(req, res){
		res.json({data:'image data'});
	})
	.post(function(req, res){
		res.json({});
	});

router.route('/webhook')
	.get(function(req, res){
		res.json( 	{
						'on-face-event': "http://{ip:port}/faceEvent", 
						'on-report-inflow': "http://{ip:port}/reportInflow", 
						'on-report-outflow': "http://{ip:port}/reportOutflow"
					});
	})
	.put(function(req, res){
		res.json({});
	});


app.use("/api", router);


// Start Server
app.listen(port);
console.log('start node at port '+port + "...");


function isValidInput(postObj, requiredFields){
	for (var fieldIdx in requiredFields){
		var field = requiredFields[fieldIdx];
		if(typeof(postObj[field])==='undefined'){
			return false;
		}
	}
	return true;
}