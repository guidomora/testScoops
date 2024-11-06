import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { PageProvider } from './context/PageProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PageProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PageProvider>
  </StrictMode>,
)
