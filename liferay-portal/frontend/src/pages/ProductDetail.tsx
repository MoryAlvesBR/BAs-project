// src/pages/ProductDetail.tsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'; // Para acessar o ID da URL
import { api } from '../services/api';
import { Product } from '../types/Product'; // Assumindo que você criou o types/Product.ts

export function ProductDetail() {
  // useParams() retorna um objeto com os parâmetros da URL.
  // Neste caso, esperamos um parâmetro chamado 'id'.
  const { id } = useParams<{ id: string }>(); 
  
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
        setError("ID do produto não fornecido na URL.");
        setLoading(false);
        return;
    }
    
    const fetchProductDetail = async () => {
      try {
        // Faz a requisição GET para /products/{id}
        const response = await api.get<Product>(`/products/${id}`);
        setProduct(response.data);
      } catch (err) {
        console.error(`Erro ao buscar produto ${id}:`, err);
        setError(`Não foi possível carregar os detalhes do produto com ID: ${id}.`);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetail();
  }, [id]); // O efeito roda novamente se o 'id' na URL mudar

  if (loading) return <h2>Carregando detalhes do produto...</h2>;
  if (error) return <h2 style={{ color: 'red' }}>Erro: {error}</h2>;
  if (!product) return <h2>Produto não encontrado.</h2>; // Se não houver erro, mas o produto for null/vazio

  return (
    <div>
      <h2>Detalhes do Produto: {product.name}</h2>
      <p><strong>ID:</strong> {product.id}</p>
      <p><strong>Preço:</strong> R$ {product.price.toFixed(2)}</p>
      <p><strong>Descrição:</strong> {product.description}</p>
      
      <Link to="/">Voltar para a lista de produtos</Link>
    </div>
  );
}