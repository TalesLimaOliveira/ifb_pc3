# 🌟 Programação de Computadores 3 (JavaScript) - Instituto Federal de Brasília 🌟

## 👨‍🏫 Professor
- **Leandro Vaguetti**

## 👨‍🎓 Aluno
- **[Tales Oliveira](https://github.com/TalesLimaOliveira)**

## 📚 Descrição
Repositório com o projeto desenvolvido na disciplina de **Programação de Computadores**, com foco na linguagem **JavaScript**. Este projeto tem como objetivo o desenvolvimento de uma **API Backend** para atender às demandas de um protótipo de aplicação elaborado em sala de aula. 🚀

🔗 **Protótipo do projeto:** [Quant UX](https://app.quant-ux.com/#/test.html?h=a2aa10az2iLb0Ao2DrTWqsqFPggbOKzNwgCywsL4tRuj9wFvpRajsRkwyQ3y&ln=en)

### 🔍 Tópicos abordados:
- Estruturação e manipulação de **APIs RESTful** 🌐  
- Operações de **CRUD** (Create, Read, Update, Delete) com JavaScript 🗃️  
- Integração com **bancos de dados** MongoDB 🛢️

---

### 📂 **Estrutura do Projeto**  

| **Diretório/Arquivo** | **Descrição**                                   |
|-----------------------|-----------------------------------------------|
| `src/`                | Contém os arquivos principais do projeto.     |
| └── `index.js`        | Ponto de entrada da aplicação.                |
| └── `controllers/`    | Lógica de controle das rotas.                 |
|     └── `UserController.js` | Controller responsável pelos usuários.       |
| └── `models/`         | Representação das entidades da aplicação.     |
|     └── `User.js`     | Modelo de dados para usuários.                |
| `package.json`        | Configurações do projeto e dependências.      |
| `README.md`           | Documentação do projeto (este arquivo).       |

---

### ⚙️ **Como Executar**  

1. **Instale os pacotes necessários:**  
> npm install

2. **Inicie a aplicação:**  
> npm start

### 📋 Rotas da API

- Adicionar um usuário: `POST /user`
- Listar todos os usuários: `GET /user`
- Listar usuários filtrados por email: `GET /user/buscaemail/?email={email}`
- Deletar um usuário: `DELETE /user/:id`
- Atualizar um usuário: `PUT /user/:id`

### 📌 Exemplos de Uso

- Adicionar um usuário:

> curl -X POST http://localhost:3000/user -H "Content-Type: application/json" -d '{"nome": "John Doe", "email": "john@example.com", "password": "123456"}'

- Listar todos os usuários:

> curl http://localhost:3000/user