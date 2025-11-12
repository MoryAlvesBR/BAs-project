// src/components/ProductCard.tsx
import React from 'react';
import { Link } from 'react-router-dom';

// 1. Define a interface do Produto se você não criou o arquivo Product.ts
interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

// 2. Define a interface para as propriedades (Props) do componente
interface ProductCardProps {
  product: Product;
}

// 3. Define o componente funcional com TypeScript
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    // Usa o Link para criar um cartão clicável que leva para /product/{id}
    <Link 
      to={`/product/${product.id}`} 
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <div style={{
        border: '1px solid #ccc',
        padding: '15px',
        borderRadius: '8px',
        width: '250px',
        minHeight: '150px',
        boxShadow: '2px 2px 5px rgba(0,0,0,0.1)',
        transition: 'box-shadow 0.3s ease-in-out',
        cursor: 'pointer'
      }}
      // Adiciona um efeito simples de hover (em um projeto real, use CSS)
      onMouseOver={(e) => (e.currentTarget.style.boxShadow = '2px 2px 10px rgba(0,0,0,0.2)')}
      onMouseOut={(e) => (e.currentTarget.style.boxShadow = '2px 2px 5px rgba(0,0,0,0.1)')}
      >
        
        <h3>{product.name}</h3>
        <p>R$ **{product.price.toFixed(2)}**</p>
        <p style={{ fontSize: '0.9em', color: '#666' }}>
          {/* Mostra uma prévia da descrição */}
          {product.description.substring(0, 50)}...
        </p>
        
        <p style={{ marginTop: '10px', fontWeight: 'bold', color: '#007bff' }}>
          Ver Detalhes →
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;