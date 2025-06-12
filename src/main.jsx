import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { TarefaProvider } from './context/TarefaContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TarefaProvider>
    <App />
    </TarefaProvider>
  </StrictMode>,
)
