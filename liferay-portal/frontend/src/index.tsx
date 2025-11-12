// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Mantenha a importação de estilos se necessário

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    {/* Renderiza o componente principal da aplicação */}
    <App />
  </React.StrictMode>
);