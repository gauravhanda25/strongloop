module.exports = function(Book) {
	
	// function to serve api request to get all related results of Book and Author Model
	Book.getDetails = function(cb) {
		Book.find({include: 'author'}, function (err, results) {
			cb(null, results);
		});
	  }
	  
	// configure a remote method getDetails   
	Book.remoteMethod(
		'getDetails',
		{
			http: {path: '/getDetails', verb: 'get'},
			returns: {arg : 'details'}
		});
		
		
		
	
	///////////////////// This commented code is meant for test but unable to run successfully /////////////////////////////
	
	
	
		//~ Book.getDetails = function(cb) {
		//~ Book.find({include: 'author'}, {where: {id : req.param.id}} , function (err, results) {
			//~ cb(null, results);
		//~ });
	  //~ }
	  //~ 
	//~ Book.remoteMethod(
		//~ 'getDetails',
		//~ {
			//~ http: {path: '/{id}/getDetails', verb: 'get'},
			//~ accepts: {arg: 'id', type: 'number', required: true,  http: { source: 'path' }},
			//~ returns: {arg : 'details'}
		//~ });
		
		
	///////////////////// This commented code is producing below provided error /////////////////////////////
	
	//~ {
	  //~ "error": {
		//~ "name": "Error",
		//~ "status": 404,
		//~ "message": "Shared class \"Book\" has no method handling GET /1/getDetails",
		//~ "statusCode": 404,
		//~ "stack": "Error: Shared class \"Book\" has no method handling GET /1/getDetails\n    at restRemoteMethodNotFound (C:\\projects\\finalApp\\node_modules\\loopback\\node_modules\\strong-remoting\\lib\\rest-adapter.js:323:17)\n    at Layer.handle [as handle_request] (C:\\projects\\finalApp\\node_modules\\loopback\\node_modules\\express\\lib\\router\\layer.js:82:5)\n    at trim_prefix (C:\\projects\\finalApp\\node_modules\\loopback\\node_modules\\express\\lib\\router\\index.js:302:13)\n    at C:\\projects\\finalApp\\node_modules\\loopback\\node_modules\\express\\lib\\router\\index.js:270:7\n    at Function.proto.process_params (C:\\projects\\finalApp\\node_modules\\loopback\\node_modules\\express\\lib\\router\\index.js:321:12)\n    at next (C:\\projects\\finalApp\\node_modules\\loopback\\node_modules\\express\\lib\\router\\index.js:261:10)\n    at Function.proto.handle (C:\\projects\\finalApp\\node_modules\\loopback\\node_modules\\express\\lib\\router\\index.js:166:3)\n    at router (C:\\projects\\finalApp\\node_modules\\loopback\\node_modules\\express\\lib\\router\\index.js:35:12)\n    at Layer.handle [as handle_request] (C:\\projects\\finalApp\\node_modules\\loopback\\node_modules\\express\\lib\\router\\layer.js:82:5)\n    at trim_prefix (C:\\projects\\finalApp\\node_modules\\loopback\\node_modules\\express\\lib\\router\\index.js:302:13)"
	  //~ }
	//~ }

};
