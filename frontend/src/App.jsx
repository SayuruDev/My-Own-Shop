import React from "react";
import Home from "./pages/Home.jsx";
import Product from "./pages/ProductPage.jsx";
import Cart from "./pages/CartPage.jsx";
import NavBar from "./components/NavBar.jsx";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
        <NavBar />
        <Routes>
            <Route path ="/" element={<Home/>} />
            <Route path ="/products" element={<Product/>} />
            <Route path ="/cart" element={<Cart/>} />
        </Routes>
    </div>
  )
}

export default App;

