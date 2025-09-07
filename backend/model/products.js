import express from "express";
import mongoose from "mongoose";

mongoose.connect ("mongodb://127.0.0.1:27017/myShop")

const productSchema = new mongoose.Schema({
  id: Number,
  name: String
});

const Product = mongoose.model("Product", productSchema);

const products = [
  { id: 1, name: "Dior Sauvage" },
  { id: 2, name: "Bleu de Chanel" },
  { id: 3, name: "Acqua di Gio" },
  { id: 4, name: "Tom Ford Noir" },
  { id: 5, name: "Creed Aventus" }
];

Product.insertMany(products)
  .then(() => console.log("Products inserted"))
  .catch((err) => console.error(err));

export default products;