import Routes from './routes'
import history from './services/history'
import { Router } from "react-router-dom";


import GlobalStyle from './styles/global'

function App() {
  return (  
  <Router history={history}>
    <Routes />
    <GlobalStyle />
  </Router> 
  )

}

export default App;
