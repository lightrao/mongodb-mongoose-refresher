const mongoose = require("mongoose");
const Product = require("./models/products");

const createProduct = async (req, res, next) => {
  const createdProduct = new Product({
    name: req.body.name,
    price: req.body.price,
  });
};

exports.createProduct = createProduct;
