import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { ProductDetail } from "./pages/ProductDetail";

function App() {
  return (
    <BrowserRouter>
      <h1>Liferay E-commerce Frontend</h1>
      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="*" element={<div>Página não encontrada (404)</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
