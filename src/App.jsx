import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import ListaTarefas from './pages/Lista';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />          
        <Route path="/lista" element={<ListaTarefas />} /> 
      </Routes>
    </BrowserRouter>
  );
}