import superagentPromise from 'superagent-promise'
import _superagent from 'superagent'

const superagent = superagentPromise(_superagent, global.Promise)
const CRYPTO_API_URL = process.env.REACT_APP_PROXY_CRYPTO_API_URL
const COIN_API_URL = process.env.REACT_APP_COINS_API_URL

const responseBody = res => res.body

const Crypto = {
  get: (queryParams) => {
    let query = {}
    
    // default IDR or view will be broken
    query.convert = process.env.REACT_APP_CURRENCY

    if (queryParams && queryParams.start)
      query.start = queryParams.start
    if (queryParams && queryParams.sort)
      query.sort = queryParams.sort
    if (queryParams && queryParams.sort_dir)
      query.sort_dir = queryParams.sort_dir

    return superagent
      .get(`${CRYPTO_API_URL}/listings/latest`)
      .query(query)
      .then(responseBody)
  }
}

const Coins = {
  get: () =>
    superagent
      .get(`${COIN_API_URL}/data/all/coinlist`)
      .then(responseBody)
}

export default {
  Crypto,
  Coins
}
