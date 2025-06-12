import { useState } from 'react';
import { useTarefa } from '../context/TarefaContext';
import {Menu,Titulo} from '../components/Menu';

function Lista() {
  const { tarefas, adicionarTarefa, removerTarefa, toggleConcluida, carregando } = useTarefa();
  const [novaTarefa, setNovaTarefa] = useState('');

  const adicionar = () => {
    if (novaTarefa.trim()) {
      adicionarTarefa(novaTarefa);
      setNovaTarefa('');
    }
  };

  if (carregando) return <p>...</p>;

  

  return (
    
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Menu/>
      <div className='header' style={{ flex: 1 }}>
        <Titulo />
      </div>

      <div className='main_container' style={{ display: 'flex', flex: 4, backgroundColor: '#f0f0f0' }}>
        <div style={{
          flex: 8,
          backgroundColor: 'rgba(66, 15, 15, 0.87)',
          padding: '20px',
          overflowY: 'auto'
        }}>
          <div style={{
            backgroundColor: 'rgba(134, 80, 80, 0.87)',
            height: '10%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '20px'
          }}>
            <h2>Falta pouco! Ou não.</h2>
          </div>

          <div style={{ marginBottom: '20px', display: 'flex' }}>
            <input
              type="text"
              value={novaTarefa}
              onChange={(e) => setNovaTarefa(e.target.value)}
              placeholder="Digite uma nova tarefa"
              style={{
                flex: 1,
                padding: '10px',
                marginRight: '10px',
                borderRadius: '4px',
                border: 'none'
              }}
              onKeyDown={(e) => e.key === 'Enter' && adicionar()}
            />
            <button
              onClick={adicionar}
              style={{
                padding: '10px 20px',
                backgroundColor: 'rgba(230, 133, 133, 0.87)',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Adicionar
            </button>
          </div>

          <div style={{ color: 'white' }}>
            {tarefas.length === 0 ? (
              <p>Nenhuma tarefa adicionada ainda.</p>
            ) : (
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {tarefas.map((tarefa) => (
                  <li
                    key={tarefa.id}
                    style={{
                      margin: '10px 0',
                      padding: '10px',
                      backgroundColor: 'rgba(134, 80, 80, 0.6)',
                      borderRadius: '4px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      textDecoration: tarefa.concluida ? 'line-through' : 'none',
                      opacity: tarefa.concluida ? 0.7 : 1
                    }}
                  >
                    {tarefa.texto}
                    <div>
                      <button
                        onClick={() => toggleConcluida(tarefa.id)}
                        style={{
                          marginLeft: '10px',
                          backgroundColor: tarefa.concluida ? '#4CAF50' : 'rgba(230, 133, 133, 0.87)',
                          color: 'white',
                          border: 'none',
                          borderRadius: '4px',
                          padding: '5px 10px',
                          cursor: 'pointer'
                        }}
                      >
                        {tarefa.concluida ? '✓' : 'Marcar'}
                      </button>
                      <button
                        onClick={() => removerTarefa(tarefa.id)}
                        style={{
                          marginLeft: '10px',
                          backgroundColor: '#f44336',
                          color: 'white',
                          border: 'none',
                          borderRadius: '4px',
                          padding: '5px 10px',
                          cursor: 'pointer'
                        }}
                      >
                        Remover
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div style={{
          flex: 1,
          backgroundColor: 'rgba(230, 133, 133, 0.87)',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <h3 style={{ color: 'white', marginBottom: '20px' }}>Tarefas Concluídas</h3>
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            borderRadius: '50%',
            width: '100px',
            height: '100px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '24px',
            fontWeight: 'bold'
          }}>
            {tarefas.filter(t => t.concluida).length}/{tarefas.length}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lista;
