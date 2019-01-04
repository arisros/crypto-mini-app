import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducers'
import { logger } from 'redux-logger'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

export default createStore(
  reducer,
  compose(
    applyMiddleware(sagaMiddleware, logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

sagaMiddleware.run(rootSaga)
