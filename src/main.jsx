import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { SlideProvider } from './lib/SliderContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SlideProvider>
      <App />
    </SlideProvider>
  </StrictMode>,
)
