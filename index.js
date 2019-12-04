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
]

/**
 * Mostra todos os projetos.
 */
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
server.put('/projects/:id', (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(p => p.id == id);

  project.title = title;

  return res.json(project);
});

// Deleta o projeto com id nos parâmetros da rota.
server.delete('/projects/:id', (req, res) => {
  const { id } = req.params;

  const projectIndex = projects.findIndex(p => p.id == id);

  projects.splice(projectIndex, 1);

  return res.send();
});

server.listen(4000);