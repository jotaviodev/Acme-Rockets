import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
document.getElementsByTagName("body")[0].className="min-h-screen bg-slate-50 dark:bg-black dark:text-white"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

