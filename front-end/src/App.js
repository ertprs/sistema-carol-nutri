import React from 'react'
import Routes from './routes'
import history from './services/history'
import { Router } from "react-router-dom";
import { ToastContainer } from 'react-toastify'

import GlobalStyle from './styles/global'
import { AuthProvider } from './context/AuthContext'

function App() {
  return (  
    <>
      <GlobalStyle/>
      <Router history={history}>
        <ToastContainer autoClose={7000} />
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </Router>
    </>
  )

}

export default App;
