import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Pages/Home';
import Global from './styles/Global';
import Routes from './routes';
import { ThemeProvider } from 'styled-components';
import theme from "./styles/theme"
import { AuthProvider } from './hooks/auth';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Global/>
      <AuthProvider>
        <Routes/>
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>,
)
