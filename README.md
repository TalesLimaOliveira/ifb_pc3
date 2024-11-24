# **Projeto de Desenvolvimento Backend - JavaScript**

## 📚 **Informações Gerais**

### Instituto Federal de Brasília - Campus Taguatinga  
**Disciplina:** Programação de Computadores 3  
**Professor:** Leandro Vaguetti  

**Autor:** [Tales Lima de Oliveira](https://github.com/TalesLimaOliveira)  
📧 tales.oliveira@estudande.ifb.edu.br  

### **Objetivo do Projeto**  
Este projeto tem como finalidade o desenvolvimento de uma **API Backend** para atender às demandas de um protótipo de aplicação criado em sala de aula.

O protótipo do projeto pode ser acessado pelo link abaixo:  
🔗 [Prototipo - Quant UX](https://app.quant-ux.com/#/test.html?h=a2aa10az2iLb0Ao2DrTWqsqFPggbOKzNwgCywsL4tRuj9wFvpRajsRkwyQ3y&ln=en)  

---

## 🛠️ **Tecnologias Utilizadas**

As tecnologias e ferramentas utilizadas no desenvolvimento incluem:  

- **Node.js**: Plataforma para execução de JavaScript no lado do servidor.  
- **Express.js**: Framework minimalista para construção de APIs RESTful.  
- **Mongoose**: Biblioteca para modelagem e integração com MongoDB.  
- **Postman** ou **Insomnia**: Ferramentas para testar e documentar as rotas.  
- **JavaScript**: Linguagem principal utilizada no backend.  

---

## 🚀 **Estrutura do Projeto**

O projeto segue uma organização modular para facilitar a manutenção, leitura e escalabilidade.  

    project-root/
    ├── src/
    │   ├── routes/
    │   │   └── expenses.routes.js
    │   ├── controllers/
    │   │   └── expenses.controller.js
    │   ├── models/
    │   │   └── expense.model.js
    │   ├── config/
    │   │   └── database.js
    │   ├── app.js
    │   └── server.js
    └── README.md