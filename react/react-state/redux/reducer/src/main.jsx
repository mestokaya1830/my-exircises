import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Router from './router/index.jsx'
import './index.css'
import authReducer from './store/authReducer.jsx'
import { legacy_createStore } from 'redux'
import { Provider } from 'react-redux'
const store = legacy_createStore(authReducer)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </StrictMode>,
)
