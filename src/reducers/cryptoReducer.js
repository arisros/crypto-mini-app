import { FETCH_CRYPTO, CRYPTO_LOADED, SET_QUERY_CRYPTO } from '../constant/actionTypes'

const initialState = {
  list: [],
  query: {},
  loading: false
}

export default (state = initialState, action) => {

  switch(action.type) {
    case FETCH_CRYPTO:
      return {
        ...state,
        loading: true
      }
    case SET_QUERY_CRYPTO:
      return {
        ...state,
        query: action.payload
      }
    case CRYPTO_LOADED:
      return {
        ...state,
        loading: false,
        list: action.payload
      }
    default:
      return state
  }

}