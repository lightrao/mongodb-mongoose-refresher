require("dotenv").config();
const mongoose = require("mongoose");
const Product = require("./models/products");

mongoose
  .connect(process.env.DB_URL_DBNAME)
  .then((result) => {
    console.log("Connected to database succesfully!");
  })
  .catch((error) => {
    console.log("Connection failed:", error);
  });

const createProduct = async (req, res, next) => {
  const createdProduct = new Product({
    name: req.body.name,
    price: req.body.price,
  });
  try {
    const result = await createdProduct.save();
    res.json(result);
  } catch (error) {
    console.log("Document inserting error:", error);
  }
};

const getProducts = async (req, res, next) => {
  try {
    const products = await Product.find().exec();
    res.json(products);
  } catch (error) {
    console.log("Document getting error:", error);
  }
};

exports.createProduct = createProduct;
exports.getProducts = getProducts;
