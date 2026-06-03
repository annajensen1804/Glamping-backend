const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    name: String,
    age: Number,
    image: String,
    review: String,
    stay: String,
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Review", reviewSchema);