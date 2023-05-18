const express = require("express");
const fs = require("fs");
const app = express();

const data = require("./data.json");
app.use(express.json());

app.get("/", (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.json(data);
});

app.post("/add", (req, res) => {
  const newData = req.body;
  const allData = [...data, newData];
  fs.writeFile("./data.json", JSON.stringify(allData), (err) => {
    if (err) throw err;
    res.send("Data Added!");
  });
});

app.post("/update", (req, res) => {
  const newData = req.body;
  const allData = data.filter((item) => item.key !== newData.key);
  allData.push(newData);
  fs.writeFile("./data.json", JSON.stringify(allData), (err) => {
    if (err) throw err;
    res.send("Data updated!");
  });
});

app.post("/delete", (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  const newData = req.body;
  const allData = data.filter((item) => item.title !== newData.title);
  fs.writeFile("./data.json", JSON.stringify(allData), (err) => {
    if (err) throw err;
    res.send("Data updated!");
  });
});

 
app.listen(process.env.PORT || 3000)

