const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
	if (err) {
		return console.log("Unable to connect MongoDB server");
	}
	console.log("Connected to MongoDB server");
	const db = client.db('TodoApp');

	//db.collection('Todos').findOneAndUpdate({
	//	_id: new ObjectID("5bb732e75a71ae51faed6d8e")
	//}, {
	//		$set: {
	//			completed: true
	//		}
	//	}, { returnOriginal: false })
	//	.then((result)=>{
	//		console.log(result);
	//	})

	db.collection("Users").findOneAndUpdate(
		{ name: "Udit" }, 
		{ 
			$set: { name: "Rohit" }, 
			$inc: { age: -1 } 
		}, 
		{ returnOriginal: false })
		.then((result) => {
			console.log(result);
		})
});