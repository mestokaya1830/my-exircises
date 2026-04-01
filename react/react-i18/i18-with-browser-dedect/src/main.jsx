import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/index.css'
import Router from '@/router/index.jsx'
import './i18n';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router />
  </StrictMode>,
)
