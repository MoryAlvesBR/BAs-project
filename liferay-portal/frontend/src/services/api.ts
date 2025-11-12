import axios from "axios";

// Cria uma instância do Axios com a URL base para todas as requisições
export const api = axios.create({
  baseURL: "http://localhost:8085", // URL do seu backend
});

// Agora, em qualquer lugar do seu código, você pode usar:
// import { api } from "../services/api";
// api.get("/products").then(...)