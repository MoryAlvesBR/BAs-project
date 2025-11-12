// src/App.tsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { ProductDetail } from './pages/ProductDetail';

// Componente principal que define as rotas da aplicação
function App() {
  return (
    <BrowserRouter>
      <h1>Liferay E-commerce Frontend</h1>
      <hr />
      
      {/* O componente Routes define as áreas de roteamento.
        Cada Route mapeia um caminho (path) para um elemento (componente).
      */}
      <Routes>
        {/* Rota para a página inicial (lista de produtos) */}
        <Route path="/" element={<Home />} />
        
        {/* Rota para os detalhes do produto, usando um parâmetro dinâmico (:id) */}
        <Route path="/product/:id" element={<ProductDetail />} />
        
        {/* Opcional: Rota para tratar caminhos não encontrados (404) */}
        <Route path="*" element={<div>Página não encontrada (404)</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;