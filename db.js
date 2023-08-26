 
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://dev-user:Sportify%402023@dev.9rummt9.mongodb.net/?retryWrites=true&w=majority";


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

 


module.exports = client;
