# Backend - Shop Project (Gradle)

Backend desenvolvido em **Spring Boot (Java 21)** usando **Gradle** e banco **MySQL via Docker**.

## Estrutura
- `Application.java`: ponto de entrada da aplicação
- `application.yml`: configuração do banco e porta
- `docker/mysql/init.sql`: script de inicialização do banco
- `build.gradle`: configuração principal do projeto

## Rodar projeto

### Subir banco de dados
```bash
cd backend/docker
docker compose up -d
