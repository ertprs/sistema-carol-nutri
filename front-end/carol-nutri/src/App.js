import Routes from './routes'
import history from './services/history'
import { Router } from "react-router-dom";
import { Provider } from 'react-redux'

import GlobalStyle from './styles/global'

import store from './store'

function App() {
  return (  
    <Provider store={store}>
      <Router history={history}>
        <Routes />
        <GlobalStyle />
      </Router> 
    </Provider>

  )

}

export default App;
