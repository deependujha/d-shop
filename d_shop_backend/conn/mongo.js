const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  // .connect(`mongodb://localhost:27017/d-shop`)
  .connect(
    `mongodb+srv://${process.env.ATLAS_USERNAME}:${process.env.ATLAS_PASSWORD}@cluster0.5ocuc97.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    // console.log(`Connected To Database !`);
  })
  .catch((err) => {
    // console.log(err);
  });
