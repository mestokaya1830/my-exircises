import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Router from './router/index.jsx'
import './index.css'
import allReducers from './store/index.jsx'
import { legacy_createStore } from 'redux'
import { Provider } from 'react-redux'
const store = legacy_createStore(allReducers)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </StrictMode>,
)
