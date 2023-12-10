const { request } = require("express");
const express = require("express");
const router = new express.Router();
const { UserOrderHistory } = require("../models/myModel");
const { Product } = require("../models/myModel");

router.post("/", async (req, res) => {
  try {
    const addr = req.body.walletAddress;
    const prd = req.body.product_id;
    const orderData = new UserOrderHistory({
      walletAddress: addr,
      product_id: prd,
      boughtOn: Date.now(),
    });
    const result = await orderData.save();
    const updRes = await Product.updateOne(
      { product_id: prd },
      { bought_by: addr }
    );
    res.send(result);
  } catch (e) {
    res.send(e);
  }
});

router.get("/:addr", async (req, res) => {
  try {
    const data = await UserOrderHistory.find({
      walletAddress: req.params.addr,
    });
    if (!data) {
      res.status(404).send();
    } else {
      res.send(data);
    }
  } catch (e) {
    res.send(e);
  }
});

router.delete("/", async (req, res) => {
  try {
    const addr = req.body.walletAddress;
    const prd = req.body.product_id;
    const result = await UserOrderHistory.deleteOne({
      walletAddress: addr,
      product_id: prd,
    });
    await Product.updateOne({ product_id: prd }, { bought_by: "" });
    res.send(result);
  } catch (e) {
    res.send(e);
  }
});

module.exports = router;
