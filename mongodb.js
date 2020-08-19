const {MongoClient} =require('mongodb');
const uri = "mongodb+srv://homework1:homework1@homework1.cekit.mongodb.net/homework1?retryWrites=true&w=majority";
//if local
//const uri ="mongodb://localhost";
const client = new MongoClient(uri, {useUnifiedTopology: true});

const run = async () => {
await client.connect();

//connect to database
const db = client.db("homework1");
//connect to collection
const collection = db.collection("comments");

//get all comments
//const allComments =  await collection.find({}).toArray()
//console.log(allComments)


//insert one
//await collection.insertOne({body: "dance"});
//const dance = await collection.findOne({body:"dance"})
//console.log(dance);

//insert many
//await collection.insertMany([{name:"123"},{name:"Revital",body:"this is the true"}]);


client.close();
}



run();