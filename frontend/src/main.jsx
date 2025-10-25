import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import data from './data/data.js'
import { ToastContainer } from 'react-toastify'


fetch('https://ipinfo.io/json?token=token')
  .then(res => res.json())
  .then(data => {
    if (data.country === 'RU') {
      window.location.href = 'https://egeball.live' + window.location.pathname;
    } else {
      createRoot(document.getElementById('root')).render(
        <StrictMode>
          <App data={data} />
          <ToastContainer position='bottom-right' autoClose={2000} />
        </StrictMode>,
      )
    }
  });

