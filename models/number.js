const mongoose = require("mongoose");

const NumberSchema = new mongoose.Schema(
  {
    desc: { type: String },
    moviename: { type: String },
    writtenby: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Number", NumberSchema);
