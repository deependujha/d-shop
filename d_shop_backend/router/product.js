const express = require("express");
const router = new express.Router();
const { Product } = require("../models/myModel");

router.get("/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const product = await Product.findOne({ product_id: _id });
    if (!product) {
      res.send({});
    } else {
      res.send(product);
    }
  } catch (e) {
    res.status(404).send({ data: e });
  }
});

router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.send(products);
  } catch (e) {
    res.status(404).send({ data: e });
  }
});

// for inserting new products in the database
// router.post("/insert", async (req, res) => {
//   try {
//     const tb1 = new Product({
//       product_id: "1011",
//       product_name: "Chromebook",
//       product_descr:
//         "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, ratione.",
//       price: 199,

//       image: "/products/tablet/chromebook.png",
//       bought_by: "",
//     });
//     const tb2 = new Product({
//       product_id: "1012",
//       product_name: "i-Pad",
//       product_descr:
//         "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, ratione.",
//       price: 350,
//       image: "/products/tablet/ipad.png",
//       bought_by: "",
//     });
//     const tb3 = new Product({
//       product_id: "1013",
//       product_name: "Huwaei tablet",
//       product_descr:
//         "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, ratione.",
//       price: 100,
//       image: "/products/tablet/huwaei.png",
//       bought_by: "",
//     });

//     const result = await Product.insertMany([tb1, tb2, tb3]);
//     res.status(201).send(result);
//   } catch (e) {
//     res.status(404).send(e);
//   }
// });

module.exports = router;
