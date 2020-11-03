import Routes from './routes'
import history from './services/history'
import { Router } from "react-router-dom";
import { ToastContainer } from 'react-toastify'

import GlobalStyle from './styles/global'

import { AuthProvider } from './context/AuthContext'

function App() {
  return (  
    <>
      <AuthProvider>
          <Router history={history}>
            <GlobalStyle />
            <ToastContainer autoClose={5000} />
            <Routes />
          </Router> 
      </AuthProvider>
    </>

  )

}

export default App;
