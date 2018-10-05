const { MongoClient } =require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
	if (err) {
		return console.log("Unable to connect MongoDB server");
	}
	console.log("Connected to MongoDB server");
	const db = client.db('TodoApp');

	//delete many
	//db.collection('Todos').deleteMany({text:"Eat lunch"}).then((result)=>{
	//	console.log(result);
	//});

	//delete one
	//db.collection('Todos').deleteOne({text:"Eat lunch"}).then((result)=>{
	//	console.log(result);
	//});

	db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
		console.log(result);
	});
});