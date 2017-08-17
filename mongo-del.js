const {MongoClient,ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {

	if (err)
	{
		return console.log("Error"+err);
	}
	console.log("All Went Fine");

	//write delete command for deleting the document from db START

	// //delete Many
	// db.collection('Todos').deleteMany({text: 'something to do'}).then(res =>{
	// 	console.log(res);
	// },err =>{
	// 	console.log(err);
	// });

	//delete One
	// db.collection('Todos').deleteOne({text:'Mayank'}).then(res =>{
	// 	console.log(res);
	// },err => {
	// 	console.log(err);
	// });

	//findOneDelete

	// db.collection('Todos').findOneAndDelete({completed:false}).then(result => {

	// 	console.log(result);
	// },err =>{
	// 	console.log(err);
	// })




	//challange to delete findMany with name Maynak

	// db.collection('Users').deleteMany({name:'Mayank'}).then(res => {

	// 	console.log(res);
	// },err => {
	// 	console.log(error);
	// });

	db.collection('Users').findOneAndDelete({name:"Maa"}).then(res => {
		console.log(res);
	},err => {
		console.log(err)
	});







	//write delete command for deleting the document from db END


	db.close();
})