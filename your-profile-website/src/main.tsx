import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import "./reset.css";
import "./global.css"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
