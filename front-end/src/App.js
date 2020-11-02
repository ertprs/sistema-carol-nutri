import Routes from './routes'
import history from './services/history'
import { Router } from "react-router-dom";

import GlobalStyle from './styles/global'
import { AuthProvider } from './context/AuthContext'



function App() {
  return (  
    <>
      <GlobalStyle />
      <AuthProvider>
        <Router history={history}>
          <Routes />
        </Router> 
      </AuthProvider>
    </>

  )

}

export default App;
