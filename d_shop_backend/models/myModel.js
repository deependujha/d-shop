const mongoose = require("mongoose");
var validator = require("email-validator");

const userAccountInfo = mongoose.Schema({
  walletAddress: {
    type: String,
    require: true,
    unique: true,
  },
  name: String,
  email: {
    type: String,
    validate(value) {
      if (!validator.validate(value)) {
        throw new Error("Entered email is not a valid email address");
      }
    },
  },
  phone_no: String,
  delivery_address: String,
});

const userOrderHistory = new mongoose.Schema({
  walletAddress: {
    type: String,
    require: true,
  },
  product_id: {
    type: String,
    require: true,
  },
  boughtOn: Date,
});

const product = new mongoose.Schema({
  product_id: {
    type: String,
    require: true,
    unique: true,
  },
  product_name: String,
  product_descr: String,
  price: Number,
  image: String,
  bought_by: String,
  sellerAddress:String
});

const UserAccountInfo = mongoose.model("User_Account_Info", userAccountInfo);
const UserOrderHistory = mongoose.model("User_Order_History", userOrderHistory);
const Product = mongoose.model("Product", product);

module.exports = { UserAccountInfo, UserOrderHistory, Product };
