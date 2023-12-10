const express = require("express");
const router = express.Router();
const { UserAccountInfo } = require("../models/myModel");

router.get("/:addr", async (req, res) => {
  try {
    const data = await UserAccountInfo.findOne({
      walletAddress: req.params.addr,
    });
    if (!data) {
    //   console.log(`data is empty`);
      res.send({});
    } else {
      res.send(data);
    }
  } catch (e) {
    // console.log(`data is empty, but it is from catch block`);
    res.status(404).send(e);
  }
});

router.post("/new", async (req, res) => {
  try {
    const userData = new UserAccountInfo(req.body);
    const result = await userData.save();
    res.send(result);
  } catch (e) {
    res.status(404).send(e);
  }
});

module.exports = router;
