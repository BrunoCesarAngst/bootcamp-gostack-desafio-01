<h3 align="center">
  Conceitos do NodeJS - Cadastro de projetos e tarefas com log de requisição
</h3>

<blockquote align="center">“A única limitação é o, eu não posso!”!</blockquote>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/rocketseat/bootcamp-gostack-desafio-01?color=%2304D361">

  <!-- <a href="https://rocketseat.com.br">
    <img alt="Made by Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-%2304D361">
  </a> -->

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">

  <a href="https://github.com/BrunoCesarAngst/bootcamp-gostack-desafio-01/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/BrunoCesarAngst/bootcamp-gostack-desafio-01?style=social">
  </a>
</p>

<p align="center">
  <a href="#rocket-sobre-o-projeto">Sobre o projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

## :rocket: Sobre o projeto

Uma aplicação para armazenar projetos e suas tarefas do zero utilizando [Express](https://expressjs.com/pt-br/).

### Rotas

- `POST /projects`: A rota recebe `id` e `title` dentro do corpo e cadastra um novo projeto dentro de um array no seguinte formato: `{ id: "1", title: 'Novo projeto', tasks: [] }`; Certifico de enviar tanto o ID quanto o título do projeto no formato string com aspas duplas.
<h1 align="center">
    <img alt="new project" src="https://github.com/BrunoCesarAngst/bootcamp-gostack-desafio-01/blob/master/images/new%20project%20de%2003-dezembro-2019%20as%2023:25:15%20em%20uma%20ter%C3%A7a%20da%20semana%2049.png" width="400px" />
</h1>

- `GET /projects`: Rota que lista todos projetos e suas tarefas;
<h1 align="center">
    <img alt="all projects" src="https://github.com/BrunoCesarAngst/bootcamp-gostack-desafio-01/blob/master/images/all%20projects%20de%2003-dezembro-2019%20as%2023:23:25%20em%20uma%20ter%C3%A7a%20da%20semana%2049.png" width="400px" />
</h1>

- `PUT /projects/:id`: A rota altera apenas o título do projeto com o `id` presente nos parâmetros da rota;
<h1 align="center">
    <img alt="alter project" src="https://github.com/BrunoCesarAngst/bootcamp-gostack-desafio-01/blob/master/images/alter%20project%20de%2003-dezembro-2019%20as%2023:28:40%20em%20uma%20ter%C3%A7a%20da%20semana%2049.png" width="400px" />
</h1>

- `DELETE /projects/:id`: A rota deleta o projeto com o `id` presente nos parâmetros da rota;
<h1 align="center">
    <img alt="delete project 0" src="https://github.com/BrunoCesarAngst/bootcamp-gostack-desafio-01/blob/master/images/delete%20project%200%20de%2003-dezembro-2019%20as%2023:31:14%20em%20uma%20ter%C3%A7a%20da%20semana%2049.png" width="400px" />
</h1>

- `POST /projects/:id/tasks`: A rota recebe um campo `title` e armazenar uma nova tarefa no array de tarefas de um projeto específico escolhido através do `id` presente nos parâmetros da rota;
<h1 align="center">
    <img alt="new task" src="https://github.com/BrunoCesarAngst/bootcamp-gostack-desafio-01/blob/master/images/new%20task%20de%2003-dezembro-2019%20as%2023:26:38%20em%20uma%20ter%C3%A7a%20da%20semana%2049.png" width="400px" />
</h1>

### Exemplo

Se eu chamar a rota `POST /projects` repassando `{ id: 1, title: 'Novo projeto' }` e a rota `POST /projects/1/tasks` com `{ title: 'Nova tarefa' }`, meu array de projetos deve ficar assim:

```js
[
  {
    id: "1",
    title: "Novo projeto",
    tasks: ["Nova tarefa"]
  }
];
```

### Middlewares

- Criei um middleware que será utilizado em todas rotas que recebem o ID do projeto nos parâmetros da URL que verifica se o projeto com aquele ID existe. Se não existir retorne um erro, caso contrário permita a requisição continuar normalmente;
<h1 align="center">
    <img alt="error alter project" src="https://github.com/BrunoCesarAngst/bootcamp-gostack-desafio-01/blob/master/images/error%20alter%20project%20de%2003-dezembro-2019%20as%2023:34:34%20em%20uma%20ter%C3%A7a%20da%20semana%2049.png" width="300px" />
    <img alt="error new task" src="https://github.com/BrunoCesarAngst/bootcamp-gostack-desafio-01/blob/master/images/error%20new%20task%20de%2003-dezembro-2019%20as%2023:33:32%20em%20uma%20ter%C3%A7a%20da%20semana%2049.png" width="300px" />
    <img alt="error delete project" src="https://github.com/BrunoCesarAngst/bootcamp-gostack-desafio-01/blob/master/images/error%20delete%20project%20de%2003-dezembro-2019%20as%2023:35:31%20em%20uma%20ter%C3%A7a%20da%20semana%2049.png" width="300px" />
</h1>

- Criei um middleware global chamado em todas requisições que imprime (`console.log`) uma contagem de quantas requisições foram feitas na aplicação até então;

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](https://github.com/BrunoCesarAngst/bootcamp-gostack-desafio-01/blob/master/LICENSE) para mais detalhes.