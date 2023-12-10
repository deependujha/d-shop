// for inserting 5 laptops
router.post("/insert", async (req, res) => {
  try {
    const lap1 = new Product({
      product_id: "1001",
      product_name: "Legacy laptop",
      product_descr:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, ratione.",
      price: 150,
      bought_by: "",
      image: "/products/laptop/laptop_01.png",
    });
    const lap2 = new Product({
      product_id: "1002",
      product_name: "MacBook",
      product_descr:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, ratione.",
      price: 450,
      bought_by: "",
      image: "/products/laptop/laptop_02.png",
    });
    const lap3 = new Product({
      product_id: "1003",
      product_name: "Dell laptop",
      product_descr:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, ratione.",
      price: 300,
      bought_by: "",
      image: "/products/laptop/laptop_03.png",
    });
    const lap4 = new Product({
      product_id: "1004",
      product_name: "HP laptop",
      product_descr:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, ratione.",
      price: 250,
      bought_by: "",
      image: "/products/laptop/laptop_04.png",
    });
    const lap5 = new Product({
      product_id: "1005",
      product_name: "Asus laptop",
      bought_by: "",
      product_descr:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, ratione.",
      price: 400,
      image: "/products/laptop/laptop_05.png",
    });

    const result = await Product.insertMany([lap1, lap2, lap3, lap4, lap5]);
    res.status(201).send(result);
  } catch (e) {
    res.status(404).send();
  }
});

// for inserting 5 smartphones
router.post("/insert", async (req, res) => {
  try {
    const ph1 = new Product({
      product_id: "1006",
      product_name: "Vivo smartphone",
      bought_by: "",
      product_descr:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, ratione.",
      price: 125,
      image: "/products/smartphone/phone_01.png",
    });
    const ph2 = new Product({
      product_id: "1007",
      product_name: "iPhone 13",
      bought_by: "",
      product_descr:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, ratione.",
      price: 350,
      image: "/products/smartphone/phone_02.png",
    });
    const ph3 = new Product({
      product_id: "1008",
      product_name: "lava phone",
      bought_by: "",
      product_descr:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, ratione.",
      price: 100,
      image: "/products/smartphone/phone_03.png",
    });
    const ph4 = new Product({
      product_id: "1009",
      product_name: "Samsung J2",
      bought_by: "",
      product_descr:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, ratione.",
      price: 150,
      image: "/products/smartphone/phone_04.png",
    });
    const ph5 = new Product({
      product_id: "1010",
      product_name: "iPhone13",
      bought_by: "",
      product_descr:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, ratione.",
      price: 750,
      image: "/products/smartphone/phone_05.png",
    });

    const result = await Product.insertMany([ph1, ph2, ph3, ph4, ph5]);
    res.status(201).send(result);
  } catch (e) {
    res.status(404).send();
  }
});

// for inserting 3 tablets
router.post("/insert", async (req, res) => {
  try {
    const tb1 = new Product({
      product_id: "1011",
      product_name: "Chromebook",
      product_descr:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, ratione.",
      price: 199,

      image: "/products/tablet/chromebook.png",
      bought_by: "",
    });
    const tb2 = new Product({
      product_id: "1012",
      product_name: "i-Pad",
      product_descr:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, ratione.",
      price: 350,
      image: "/products/tablet/ipad.png",
      bought_by: "",
    });
    const tb3 = new Product({
      product_id: "1013",
      product_name: "Huwaei tablet",
      product_descr:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, ratione.",
      price: 100,
      image: "/products/tablet/huwaei.png",
      bought_by: "",
    });

    const result = await Product.insertMany([tb1, tb2, tb3]);
    res.status(201).send(result);
  } catch (e) {
    res.status(404).send(e);
  }
});
