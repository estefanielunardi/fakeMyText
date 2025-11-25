import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles/chat.css";
import "./styles/messageBubble.css";
import './index.css'
import './App.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
