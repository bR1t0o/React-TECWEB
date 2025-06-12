import { createContext, useContext, useEffect, useState } from 'react';

const TarefaContext = createContext();

export function TarefaProvider({ children }) {
  const [tarefas, setTarefas] = useState([]);
  const [carregando, setCarregando] = useState(true);

  const API_URL = 'http://localhost:3001/tarefas';

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        setTarefas(data);
        setCarregando(false);
      })
      .catch(err => {
        console.error('Erro ao buscar tarefas:', err);
        setCarregando(false);
      });
  }, []);

  const adicionarTarefa = (texto) => {
    const nova = {
      texto: texto,
      concluida: false
    };

    fetch(API_URL, {
      method: 'POST',
      body: JSON.stringify(nova),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(res => res.json())
      .then(data => {
        setTarefas(prev => [...prev, data]);
      });
  };

  const toggleConcluida = (id) => {
    const tarefa = tarefas.find(t => t.id === id);
    const atualizada = { ...tarefa, concluida: !tarefa.concluida };

    fetch(`${API_URL}/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({ concluida: atualizada.concluida }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(res => res.json())
      .then(data => {
        setTarefas(tarefas.map(t => t.id === id ? data : t));
      });
  };

  const removerTarefa = (id) => {
    fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    }).then(() => {
      setTarefas(tarefas.filter(t => t.id !== id));
    });
  };

  return (
    <TarefaContext.Provider value={{ tarefas, adicionarTarefa, removerTarefa, toggleConcluida, carregando }}>
      {children}
    </TarefaContext.Provider>
  );
}

export function useTarefa() {
  return useContext(TarefaContext);
}
