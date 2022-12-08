// ./mongo.js
// responsible for logic related to the connection to MongoDB
require("dotenv").config();
const { MongoClient } = require("mongodb");
const url = process.env.DB_URL;
const databaseName = "products_test";

const createProduct = async (req, res, next) => {
  const newProduct = {
    name: req.body.name,
    price: req.body.price,
  };

  // put the object into our MongoDB database
  const client = new MongoClient(url);
  try {
    await client.connect();
    const db = client.db(databaseName);
    await db.collection("products").insertOne(newProduct);
  } catch (error) {
    return res.json({ errorMessage: error });
  }
  client.close();
  res.json(newProduct);
  next();
};

const getProducts = async (req, res, next) => {};

exports.createProduct = createProduct;
exports.getProducts = getProducts;
