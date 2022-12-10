const mongoose = require("mongoose");

// schema is the blueprint for a document
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
});

// The model function
// First argument: name of the schema, this will also become the name of
// the collection without the capital starting character and in the plural form
module.exports = mongoose.model("Product", productSchema);
