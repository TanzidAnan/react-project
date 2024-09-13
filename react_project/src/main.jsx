import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Compent from './assets/compuntent/Compent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Compent></Compent>
  </StrictMode>,
)
