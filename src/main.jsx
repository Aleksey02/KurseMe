import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import data from './data/data.js'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App data={data} />
  </StrictMode>,
)
