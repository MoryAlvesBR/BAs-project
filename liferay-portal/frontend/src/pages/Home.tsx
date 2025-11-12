// src/pages/Home.tsx
import React, { useState, useEffect } from 'react';
import { api } from '../services/api'; // Importa a instância configurada do Axios
import { Product } from '../types/Product'; // Assumindo que você criou o types/Product.ts
import ProductCard from '../components/ProductCard'; // Componente para exibir cada produto

// Se você não criou types/Product.ts, use interface Product { ... } aqui.

export function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Função assíncrona para buscar os dados
    const fetchProducts = async () => {
      try {
        // Faz a requisição GET para /products
        const response = await api.get<Product[]>('/products');
        setProducts(response.data);
      } catch (err) {
        console.error("Erro ao buscar produtos:", err);
        setError("Não foi possível carregar a lista de produtos.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []); // O array vazio garante que o efeito rode apenas uma vez ao montar

  if (loading) return <h2>Carregando produtos...</h2>;
  if (error) return <h2 style={{ color: 'red' }}>Erro: {error}</h2>;

  return (
    <div>
      <h2>Página Home - Lista de Produtos</h2>
      
      {/* Mapeia a lista de produtos e renderiza o ProductCard para cada um */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      {products.length === 0 && !loading && !error && (
        <p>Nenhum produto encontrado.</p>
      )}
    </div>
  );
}