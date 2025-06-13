import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import data from './data/data.js'
import { ToastContainer } from 'react-toastify'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App data={data} />
    <ToastContainer position='bottom-right' autoClose={2000} />
  </StrictMode>,
)
