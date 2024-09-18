import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Pages/Home';
import Global from './styles/Global';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Global/>
    <Home />
  </StrictMode>,
)
