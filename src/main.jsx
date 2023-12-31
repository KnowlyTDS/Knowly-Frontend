import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { AuthProvider } from '@/auth'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
)
