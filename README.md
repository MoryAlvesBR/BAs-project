🧱 Projeto Liferay + Backend + Frontend
📂 Estrutura do Projeto
project-root/
├── backend/
│   ├── docker/
│   │   └── mysql/
│   │       └── init.sql
│   └── (código Spring Boot)
├── frontend/
│   └── (código React)
├── liferay-portal/
│   └── (arquivos do Liferay)
└── docker-compose.yml

🚀 Subir o Ambiente Completo

Na raiz do projeto:

docker compose up --build


Isso irá subir os seguintes serviços:

MySQL (banco de dados principal)

Liferay (portal rodando em http://localhost:8080)

Backend (Spring Boot) (http://localhost:8081)

Frontend (React) (http://localhost:3000)

⚙️ Parar e Limpar Containers

Para derrubar todos os containers:

docker compose down


Para derrubar e remover volumes (dados do MySQL):

docker compose down -v

🧩 Serviços e Portas
Serviço	Porta Local	Descrição
MySQL	3306	Banco de dados
Liferay	8080	Portal principal
Backend	8081	API Spring Boot
Frontend	3000	Interface React
💾 Inicialização do Banco

O arquivo SQL que cria e inicializa o banco está em:

backend/docker/mysql/init.sql


Ele é executado automaticamente na primeira subida do container MySQL.

🧠 Comandos Úteis

Ver logs de um serviço específico:

docker logs -f liferay
docker logs -f backend
docker logs -f frontend


Reconstruir apenas um serviço:

docker compose build backend
docker compose up -d backend


Acessar o terminal dentro de um container:

docker exec -it backend bash

🧰 Requisitos

Docker 20+

Docker Compose 2+

Porta 8080, 8081 e 3000 livres

✅ Fluxo de Desenvolvimento

Edite o código do backend (Spring Boot).
Ele será reconstruído automaticamente se tiver hot reload configurado.

Edite o frontend (React).
Rode localmente com npm start ou use o container.

O Liferay já está integrado ao mesmo banco (lportal).
