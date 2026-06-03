const mongoose = require("mongoose");

const staySchema = new mongoose.Schema({
  title: String,
  teaser: String,
  description: String,
  numberOfPersons: Number,
  discountInPercent: Number,
  price: Number,
  includes: [String],
  image: String,
},
{
    timestamps: true,
}
);

module.exports = mongoose.model("Stay", staySchema);