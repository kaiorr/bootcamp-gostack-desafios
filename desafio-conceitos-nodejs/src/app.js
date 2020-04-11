const express = require("express");
const cors = require("cors");
const { uuid } = require("uuidv4");

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

//Criação do middleware para checar se os repositórios existem antes da requisicação.
function checkRepoExists(req, res, next) {
  const { id } = req.params;
  const repositoryIndex = repositories.findIndex(repository => repository.id === id);
  if (repositoryIndex === -1) return res.status(400).json({ error: 'Repositório não encontrado'});

  req.repositoryIndex = repositoryIndex;
  return next()
}

app.get("/repositories", (req, res) => {
  return res.json(repositories);
});

app.post("/repositories", (req, res) => {
  const { title, url, techs } = req.body;
  const newRepository = { id: uuid(), title, url, techs, likes: 0 };

  repositories.push(newRepository);
  return res.json(newRepository);
});

app.put("/repositories/:id", checkRepoExists, (req, res) => {
  const index = req.repositoryIndex;
  const { title, url, techs } = req.body;

  repositories[index] = { ...repositories[index], title, url, techs };

  return res.json(repositories[index]);
});

app.delete("/repositories/:id", checkRepoExists, (req, res) => {
  const index = req.repositoryIndex;
  repositories.splice(index, 1);
  return res.status(204).send();
});

app.post("/repositories/:id/like", checkRepoExists, (req, res) => {
  const index = req.repositoryIndex;
  repositories[index].likes++;
  return res.json(repositories[index]);
});

module.exports = app;