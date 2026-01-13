// imports
const express = require("express"); //importing express package
const app = express(); // creates a express application
const dotenv = require("dotenv").config(); //this allows me to use my .env values in this file
const mongoose = require("mongoose");
const morgan = require("morgan");
const hotelRoutes = require("./controllers/hotel.routes");

app.use(express.static("public")); // my app will serve all static files from public folder
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

async function connectToDB() {
  //connection to the database
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to Database");
  } catch (error) {
    console.log("Error Occured", error);
  }
}

connectToDB(); // connect to database

// Routes go here

app.use("/hotels", hotelRoutes);

app.listen(3000, () => {
  console.log("App is working. http://127.0.0.1:3000");
}); // Listen on Port 3000
