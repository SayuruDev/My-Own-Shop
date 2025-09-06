import express from "express"
import products from "./model/products.js";

const app = express()

app.get("/",(req, res) =>{
    res.send("Server is ready")
})

const port = process.env.PORT || 3000

app.listen(port,() =>{
console.log(`Server running at http://localhost:${port}`);
})

app.get("/api/products", (req, res) => {
  res.json(products);  
});