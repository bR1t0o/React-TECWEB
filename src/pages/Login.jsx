import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [nome, setnome] = useState('');
   const [senha, setsenha] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (nome.trim()) {
      navigate('/lista'); 
    }
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center',display:'flex', flexDirection:'column',gap: 10}}>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Seu nome"
        value={nome}
        onChange={(e) => setnome(e.target.value)}
      />
      <input
        type="text"
        placeholder="Sua senha"
        value={senha}
        onChange={(e) => setsenha(e.target.value)}
      />
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
}