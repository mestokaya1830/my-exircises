import { HelmetProvider } from 'react-helmet-async'
import { createRoot } from 'react-dom/client'
import './index.css'
import Router from './router/index.jsx'

createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <Router />
  </HelmetProvider>
)
