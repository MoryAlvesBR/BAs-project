import React from "react";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div>
      <h2>Lista de Produtos</h2>
      <ul>
        <li><Link to="/product/1">Produto 1</Link></li>
        <li><Link to="/product/2">Produto 2</Link></li>
      </ul>
    </div>
  );
}
