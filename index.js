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

server.listen(4000);