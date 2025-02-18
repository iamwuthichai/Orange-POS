import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import "@fontsource/kanit"; // โหลดฟอนต์ Kanit (Default น้ำหนัก 400)
import "@fontsource/kanit/300.css"; // น้ำหนักบาง
import "@fontsource/kanit/700.css"; // น้ำหนักหนา
import './index.css'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
