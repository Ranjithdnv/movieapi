const express = require("express");

const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
app.use(express.json());
const cors = require("cors");

var jsonParser = bodyParser.text();
// var urlencodedParser = bodyParser.urlencoded({
//   extended: true,
//   limit: 1024 * 1024 * 10,
//   type: "application/x-www-form-urlencoded",
// });
app.use(jsonParser);
// app.use(urlencodedParser);
app.use(bodyParser.json());

const Number = require("./models/number");
const Items = require("./models/items");
app.use(cors("https://moviebano.onrender.com/"));

console.log(0);

let message = "";
//-----------------------------------------------
mongoose
  .connect(
    "mongodb+srv://pavankumarmoka:3ccG3rpxQoWOGEJl@expresscluster.gfleory.mongodb.net/Movie?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("success"));

//------------------

// });
// //retrieve------------------------------------
// //----------------------------------------

//number
app.post("/", async (req, res) => {
  const newPost = new Number(req.body);
  try {
    console.log(req.body);
    console.log(req.file);
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err.message);
  }
  // res.send(req.body)
});
//
app.put("/numberupdate/", async (req, res) => {
  const newPost = await Number.findByIdAndUpdate(
    req.body._id,
    { $set: { dayofarrival: req.body.dayofarrival, date: req.body.date } },
    { new: true }
  );
  try {
    console.log(req.body);

    res.status(200).json(newPost);
  } catch (err) {
    res.status(500).json(err.message);
  }
  // res.send(req.body)
});
//
app.get("/", async (req, res) => {
  try {
    // console.log(req)
    const savedPost = await Number.find();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err.message);
  }
  // res.send(req.body)
});

//

app.delete("/", async (req, res) => {
  try {
    // console.log(req)
    await Number.deleteMany();
    res.status(200).json({ delete: "done" });
  } catch (err) {
    res.status(500).json(err);
  }
});

//
app.listen(3003, () => {
  console.log("Server is running");
});
