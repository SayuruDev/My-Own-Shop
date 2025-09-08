import React from "react";
import Home from "./pages/Home.jsx";
import Product from "./pages/ProductPage.jsx";
import Cart from "./pages/CartPage.jsx";
import ProductDetails from "./pages/ProductDetailPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";

import NavBar from "./components/Navbar.jsx";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
        <NavBar />
        <Routes>
            <Route path ="/" element={<Home/>} />
            <Route path ="/products" element={<Product/>} />
            <Route path ="/cart" element={<Cart/>} />
            <Route path ="/details" element={<ProductDetails/>} />
            <Route path ="/login" element={<LoginPage/>} />
            <Route path ="/register" element={<RegisterPage/>} />
        </Routes>
    </div>
  )
}

export default App;

