import React from "react";
import { useParams, Link } from "react-router-dom";

export function ProductDetail() {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <h2>Detalhes do Produto {id}</h2>
      <p>Informações completas sobre o produto {id}.</p>
      <Link to="/">Voltar</Link>
    </div>
  );
}
