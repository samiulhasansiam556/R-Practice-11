import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MyState from './Contex/MyState.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

  <MyState>
    <App />
  </MyState>
  
)
