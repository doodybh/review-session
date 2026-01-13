const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
  hotelName: {
    type: String,
    required: true,
  },
  stars: {
    type: Number,
    min: 0,
    max: 5
  },
  city: String
});

const Hotel = mongoose.model("Hotel", hotelSchema);

module.exports = Hotel;
