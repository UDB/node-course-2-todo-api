const { MongoClient } =require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
	if (err) {
		return console.log("Unable to connect MongoDB server");
	}
	console.log("Connected to MongoDB server");
	const db = client.db('TodoApp');

	db.collection('Todos').find({completed:false}).toArray().then((docs) => {
		console.log('Todos');
		console.log(JSON.stringify(docs, undefined, 2));
	}, (err) => {
		console.log('Unable to fetch todos', err);
	});

	let name="Udit";
	db.collection('Users').find({name:"Udit"}).toArray().then((docs)=>{
		console.log(JSON.stringify(docs,undefined,2));
	},(err)=>{
		console.log(`Unable to find ${name}`,err);
	})
});