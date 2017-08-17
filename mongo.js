const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) =>{

	if (err){

		return console.log("Unable to connect to MongoDb");
	}
	console.log('connected to MongoDB Server');

// //create collection START
// 	db.collection('Todos').insertOne({
// 		text:' Something to done',
// 		completed: false

// 	},(err,res) => {
// 		if(err){

// 			return console.log('Unable to create Record');
// 		}
// 		console.log(JSON.stringify(res.ops,undefined,2));
// 	})

	db.collection('Users').insertOne({
		name : 'Mayank',
		age : 23,
		location : 'Chennai'
	},(err,res) => {

		if (err)
		{
			return console.log("Error Found"+err);
		}
		console.log(JSON.stringify(res.ops[0]._id.getTimestamp(),undefined,2));
	})
	db.close();

} );