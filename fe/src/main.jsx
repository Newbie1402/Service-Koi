import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import { CookiesProvider } from 'react-cookie'
import { AuthContextProvider } from './contexts/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <CookiesProvider defaultSetOptions={{ path: '/' }}>
            <AuthContextProvider>
                <Router>
                    <App />
                </Router>
            </AuthContextProvider>
        </CookiesProvider>
    </StrictMode>
)
