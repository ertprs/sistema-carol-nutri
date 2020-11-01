import createSagaMiddleware from 'redux-saga'
import createStore from './createStore'

import rootReduced from './modules/rootReduced'
import rootSaga from './modules/rootSaga'

const sagaMonitor = null
const SagaMiddleware = createSagaMiddleware({sagaMonitor});

const middlewares = [SagaMiddleware]

const store = createStore(rootReduced, middlewares)

SagaMiddleware.run(rootSaga)

export default store;