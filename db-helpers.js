const client = require("./db");

const db = client.db("pc");

// Pages Helpers Functions

module.exports.initializeDatabase = async () => {
  console.log(db);
  // Checking for users collection and its indexes
};

module.exports.getAllData = async (_id) => {
  return db
    .collection("numbers")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      return result;
    });
};

module.exports.newNumber = async (data) => {
  const newData = data;
  newData["_id"] = Date.now();
  await db.collection("numbers").insertOne(newData);
  return newData["_id"];
};

module.exports.UpdateNumber = async (data) => {

  console.log(data)
  
  await db.collection("numbers").updateOne(
    { _id: data.id },
    {
      $set: data,
    }
  );
  return true;
};

module.exports.deleteNumber = async (title) => {
  await db.collection("numbers").deleteOne({title});
  return true;
};
