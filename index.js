const express = require("express");
const fs = require("fs");
const app = express();
const {
  getAllData,
  newNumber,
  UpdateNumber,
  deleteNumber,
} = require("./db-helpers");
app.use(express.json());

app.get("/", async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  await getAllData().then((data) => res.json(data));
});

app.post("/add", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");

  const newData = req.body;
  newNumber(newData).then(() => {
    res.send("Data Added!");
  });
});

app.post("/update", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");

  const newData = req.body;
  UpdateNumber(newData).then(() => {
    res.send("Data Updated!");
  });
});

app.post("/delete", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const newData = req.body;
  deleteNumber(newData.title).then(() => {
    res.send("Data Deleted!");
  });
});

app.listen(process.env.PORT || 3000);
