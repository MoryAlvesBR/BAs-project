# ⚛️ Frontend Liferay Portal (React + TypeScript)

Este é o módulo frontend do projeto Liferay Portal, desenvolvido com **React** e **TypeScript**. Ele utiliza `axios` para comunicação com a API e `react-router-dom` para gerenciamento de rotas, seguindo uma estrutura modular e de fácil manutenção.

## 🚀 Primeiros Passos

Siga as instruções abaixo para configurar e iniciar o ambiente de desenvolvimento do frontend.

### Pré-requisitos

Certifique-se de ter o **Node.js** e o **npm** (ou yarn) instalados em sua máquina.

### 1. Configuração do Projeto

    Navegue até o diretório `liferay-portal/frontend/` e execute os comandos de inicialização:

1. **Crie o projeto React com TypeScript no diretório atual (`.`):**
   ```bash
   npx create-react-app . --template typescript

2. Instale as dependências essenciais:
   ```bash
    npm install axios react-router-dom

### 2. Estrutura de Diretórios

    Após a instalação, organize os arquivos dentro de src/ conforme esta estrutura:

src/
├── components/         # Componentes reutilizáveis (e.g., ProductCard.tsx)
├── pages/              # Componentes de layout e rotas principais (e.g., Home.tsx, ProductDetail.tsx)
├── services/           # Configuração de serviços de API
│   └── api.ts
├── types/              # Definições de tipos (interfaces) TypeScript
│   └── Product.ts
├── App.tsx             # Componente principal e configuração de rotas
└── index.tsx           # Ponto de entrada da aplicação

### 3. Configuração da API (Backend)

    Crie e preencha o arquivo src/services/api.ts para configurar a instância do Axios, apontando para o seu backend que deve rodar na porta 8085:
    ```TypeScript
    src/services/api.ts

    TypeScript

    import axios from "axios";

    // Instância do Axios apontando para a URL base do backend
    export const api = axios.create({
    baseURL: "http://localhost:8085", 
    });

### 4. Implementação dos Componentes Principais

    Crie e preencha os arquivos:
        src/types/Product.ts
        src/components/ProductCard.tsx
        src/pages/Home.tsx
        src/pages/ProductDetail.tsx
        src/App.tsx


