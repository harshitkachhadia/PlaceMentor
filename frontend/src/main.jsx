import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material'
import theme from './theme.js'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </BrowserRouter>
)
