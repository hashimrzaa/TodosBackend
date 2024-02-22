const express = require("express");
var cors = require("cors");
const app = express();
const port = 3000;

// cors

app.use(cors());
app.use(express.json());

// array of object
const arr = [];

// get
app.get("/api/contacts/Users", (req, res) => {
  res.send(arr);
});

// post
app.post("/api/contacts/Users", (req, res) => {
  const { title } = req.body;
  arr.push({
    title: title,
    id: Date.now(),
  });
});

// delete
app.delete("/api/contacts/Users/:id", (req, res) => {
  const { id } = req.params;
  const index = arr.findIndex((user) => user.id === Number(id));
  if (index === -1) {
    return;
  }
  arr.splice(index, 1);
});

// update todo
app.put("/api/contacts/Users/:id", (req, res) => {
  const { title } = req.body;
  const { id } = req.params;
  const index = arr.findIndex((user) => user.id === Number(id));
  if (index === -1) {
    return;
  }
  arr[index].title = title;
});

app.listen(port, () => {
  console.log(`hellow ${port}`);
});
