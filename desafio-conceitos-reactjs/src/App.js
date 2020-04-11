import React, { useState, useEffect } from "react";

import "./styles.css";

import api from './services/api';

function App() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    async function getRepositories() {
      const { data } = await api.get('/repositories');
      setRepositories(data)
      console.log(data)
    }
    getRepositories()
  }, [])

  async function handleAddRepository() {
    const { data } = await api.post('/repositories', 
      { 
        title: 'Projeto adicionado', 
        url: '"https://github.com/Rocketseat/bootcamp-gostack-desafios/tree/master/desafio-conceitos-nodejs"',
        techs: 'Node.js, ReactJS, React Native'
      }
    );
    setRepositories([...repositories, data])
  }

  async function handleRemoveRepository(id) {
    await api.delete(`/repositories/${id}`);
    setRepositories(repositories.filter(repository => repository.id !== id))
  }

  return (
    <div>
      <ul data-testid="repository-list">
          {repositories.map(repository => (
            <li key={repository.id}>
              <span>{repository.title}</span>

              <button onClick={() => handleRemoveRepository(repository.id)}>
                Remover
              </button>
            </li>
          ))}
      </ul>
      
      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
