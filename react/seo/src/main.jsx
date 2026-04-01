import { createRoot } from 'react-dom/client'
import './index.css'
import { HelmetProvider } from 'react-helmet-async';
import Router from'./router/index'

createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <Router />
  </HelmetProvider>,
)
