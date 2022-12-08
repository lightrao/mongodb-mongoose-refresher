// ./mongo.js
// responsible for logic related to the connection to MongoDB
require("dotenv").config();
const MongoClient = require("mongodb").MongoClient;
const databasePassword = process.env.DB_PASSWORD;
const databaseName = "products_test";

const url = `mongodb+srv://lightrao:${databasePassword}@cluster0.k1pcet1.mongodb.net/${databaseName}?retryWrites=true&w=majority`;

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://lightrao:<password>@cluster0.k1pcet1.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

const createProduct = async (req, res, next) => {};

const getProducts = async (req, res, next) => {};

exports.createProduct = createProduct;
exports.getProducts = getProducts;
