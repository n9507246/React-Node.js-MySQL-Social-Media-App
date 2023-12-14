import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './style.scss'
import { DarkModeContextProvider } from '@context/darkModeContext'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <App/>
    </DarkModeContextProvider>  
  </React.StrictMode>,
)
