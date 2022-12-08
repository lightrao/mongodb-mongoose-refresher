// ./app.js
const express = require("express");
const bodyParser = require("body-parser");
const mongoPractice = require("./mongo");

const app = express();

app.use(bodyParser.json());

// store a document，each product would be a document in our collection
app.post("/products", mongoPractice.createProduct);

// give me all the documents stored in a specific collection
app.get("/products");

app.listen(3000);
