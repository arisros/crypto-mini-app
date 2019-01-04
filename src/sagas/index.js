import agent from '../agent'
import { put, takeLatest, all } from 'redux-saga/effects'
import { FETCH_CRYPTO, CRYPTO_LOADED, FETCH_COINS, COINS_LOADED } from '../constant/actionTypes'

function* fetchCrypto(action) {
  const payload = yield agent
    .Crypto
    .get(action.query)
    .then(response => response.data)

  yield put({ 
    type: CRYPTO_LOADED,
    payload })
}
function* cyptoWatcher() {
  yield takeLatest(FETCH_CRYPTO, fetchCrypto)
}

function* fetchCoin() {
  const payload = yield agent
    .Coins
    .get()
    .then(response => response.Data)
  
    yield put({
      type: COINS_LOADED,
      payload
    })
}
function* coinsWatcher() {
  yield takeLatest(FETCH_COINS, fetchCoin)
}

export default function* rootSaga() {
  yield all([
    cyptoWatcher(),
    coinsWatcher()
  ])
}