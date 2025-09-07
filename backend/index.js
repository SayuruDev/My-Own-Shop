import express from "express"
import { allProducts } from "./controller/productController.js";
import cors from "cors";

const app = express()
app.use(cors());


app.get("/",(req, res) =>{
    res.send("Server is ready")
})

const port = process.env.PORT || 3000

app.listen(port,() =>{
console.log(`Server running at http://localhost:${port}`);
})

app.get("/api/products", allProducts);
