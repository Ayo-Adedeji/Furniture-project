import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import LivingRoomPage from "./pages/LivingRoomPage";
import BedroomPage from "./pages/BedroomPage";
import KitchenPage from "./pages/KitchenPage";
import DiningPage from "./pages/DiningPage";
import { CartProvider } from "./components/CartContext";
import Details from "./pages/Details";
import Carts from "./pages/Carts";
import Checkouts from "./pages/Checkouts";
import CartSidebar from "./components/CartSidebar";

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/living" element={<LivingRoomPage />} />
        <Route path="/bedroom" element={<BedroomPage />} />
        <Route path="/kitchen" element={<KitchenPage />} />
        <Route path="/dining" element={<DiningPage />} />
        <Route path="/product/:id" element={<Details />} />
        <Route path="/cart" element={<Carts />} />
        <Route path="/checkout" element={<Checkouts />} />
      </Routes>
      <CartSidebar />
    </CartProvider>
  );
}

export default App;
