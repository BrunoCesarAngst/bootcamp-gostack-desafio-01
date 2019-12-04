const express = require('express');

const server = express();

server.use(express.json());

const projects = [
  {
    id: "0",
    title: 'Projeto',
    tasks: [
      "tarefa"
    ]
  }
];

// Middleware que checa a existência do projeto.
function checkExistsProject(req, res, next) {
  const { id } = req.params;
  const project = projects.find(p => p.id == id);

  if (!project) {
    return res.status(400).json({ error: 'Project not found' });
  }

  return next();
};

// Middleware com log das requisições
function logRequests(req, res, next) {
  console.count("Número de requisições");

  return next();
};

server.use(logRequests);

// Mostra todos os projetos.
server.get('/projects', (req, res) => {
  return res.json(projects);
});

// Cria um novo projeto.
server.post('/projects', (req, res) => {
  const { id, title } = req.body;

  const project = {
    id,
    title,
    tasks: []
  };

  projects.push(project);

  return res.json(project);
});

// Alterar o titulo de um projeto com id nos parâmetros da rota.
server.put('/projects/:id', checkExistsProject, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(p => p.id == id);

  project.title = title;

  return res.json(project);
});

// Deleta o projeto com id nos parâmetros da rota.
server.delete('/projects/:id', checkExistsProject, (req, res) => {
  const { id } = req.params;

  const projectIndex = projects.findIndex(p => p.id == id);

  projects.splice(projectIndex, 1);

  return res.send();
});

// Cria uma tarefa no id do projeto específico.
server.post('/projects/:id/tasks', checkExistsProject, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(p => p.id == id);

  project.tasks.push(title);

  return res.json(project);
});

server.listen(4000);