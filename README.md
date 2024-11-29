# 🌟 Programação de Computadores 3 (JavaScript) - Instituto Federal de Brasília 🌟

## 👨‍🏫 Professor
- **Leandro Vaguetti**

## 👨‍🎓 Alunos
- **[Tales Oliveira](https://github.com/TalesLimaOliveira)**
- **[David Caldas](https://github.com/caldasdv)**

## 📚 Descrição
Repositório com o projeto desenvolvido na disciplina de **Programação de Computadores**, com foco na linguagem **JavaScript**. Este projeto tem como objetivo o desenvolvimento de uma **API Backend** para atender às demandas de um protótipo de aplicação elaborado em sala de aula. 🚀

### 🔍 Tópicos abordados:
- Estruturação e manipulação de **APIs RESTful** 🌐  
- Operações de **CRUD** (Create, Read, Update, Delete) com JavaScript 🗃️  
- Integração com **bancos de dados** MongoDB 🛢️

### 🔗 Protótipo do projeto: [Quant UX](https://app.quant-ux.com/#/test.html?h=a2aa10az2iLb0Ao2DrTWqsqFPggbOKzNwgCywsL4tRuj9wFvpRajsRkwyQ3y&ln=en)

---

## ⚙️ Funcionalidades

- **Usuários**: CRUD (Create, Read, Update, Delete) de usuários.
- **Unidades**: CRUD de unidades do condomínio.
- **Reservas**: CRUD de reservas de espaços no condomínio.
- **Financeiro**: CRUD de movimentações financeiras do condomínio.
- **Ocorrências**: CRUD de ocorrências no condomínio.

---

### 📂 **Estrutura do Projeto**  

| **Diretório/Arquivo** | **Descrição**                                 |
|-----------------------|-----------------------------------------------|
| ├`src/`               | Contém os arquivos principais do projeto.     |
| │  ├─`controllers/`   | Lógica de controle das rotas.                 |
| │  ├─`models/`        | Modelo de dados para usuários.                |
| │  ├─`routers/`       | Rotas da aplicação.                           |
| │  └─`index.js`       | Ponto de entrada da aplicação.                | 
| ├`package.json`       | Configurações do projeto e dependências.      |
| └`README.md`          | Documentação do projeto (este arquivo).       |

---

### 🚀 **Como Executar**  

1. **Instale os pacotes necessários:**  
> npm install

2. **Inicie a aplicação:**  
> npm start

---

### 📌 Exemplos de Uso
- O servidor estará rodando na porta 3001. Acesse `http://localhost:3001` para ver a mensagem de boas-vindas.

- Use um cliente HTTP (como Postman) para interagir com a API através das rotas definidas em `src/routers/routes.js`.

- Adicionar um usuário:

> curl -X POST http://localhost:3001/user -H "Content-Type: application/json" -d '{"nome": "John Doe", "email": "john@example.com", "password": "123456"}'

- Listar todos os usuários:

> curl http://localhost:3001/user

---

### 📋 Rotas da API

#### 🧑 Usuários:

- `POST /api/user`: Adiciona um novo usuário.
- `GET /api/user`: Lista todos os usuários.
- `GET /api/user/buscaemail`: Busca usuário por email.
- `DELETE /api/user/:id` Deleta um usuário por ID.
- `PUT /api/user/:id`: Atualiza um usuário por ID.

#### 🏠 Unidades:

- `POST /api/unidade`: Adiciona uma nova unidade.
- `GET /api/unidade`: Lista todas as unidades.
- `GET /api/unidade/:id`: Busca unidade por ID.
- `DELETE /api/unidade/:id`: Deleta uma unidade por ID.
- `PUT /api/unidade/:id`: Atualiza uma unidade por ID.

#### 🎉 Reservas:

- `POST /api/reserva`: Adiciona uma nova reserva.
- `GET /api/reserva`: Lista todas as reservas.
- `GET /api/reserva/:id`: Busca reserva por ID.
- `DELETE /api/reserva/:id`: Deleta uma reserva por ID.
- `PUT /api/reserva/:id`: Atualiza uma reserva por ID.

#### 💸 Financeiro:

- `POST /api/financeiro`: Adiciona uma nova movimentação financeira.
- `GET /api/financeiro`: Lista todas as movimentações financeiras.
- `GET /api/financeiro/:id`: Busca movimentação financeira por ID.
- `DELETE /api/financeiro/:id`: Deleta uma movimentação financeira por ID.
- `PUT /api/financeiro/:id`: Atualiza uma movimentação financeira por ID.

#### 📦 Ocorrências:

- `POST /api/ocorrencia`: Adiciona uma nova ocorrência.
- `GET /api/ocorrencia`: Lista todas as ocorrências.
- `GET /api/ocorrencia/:id`: Busca ocorrência por ID.
- `DELETE /api/ocorrencia/:id`: Deleta uma ocorrência por ID.
- `PUT /api/ocorrencia/:id`: Atualiza uma ocorrência por ID.
`