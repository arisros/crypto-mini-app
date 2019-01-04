import { combineReducers } from 'redux'
import cryptoReducer from './cryptoReducer'
import balanceReducer from './balanceReducer'
import coinsReducer from './coinsReducer'

export default combineReducers({
  balance: balanceReducer,
  crypto: cryptoReducer,
  coins: coinsReducer
})
