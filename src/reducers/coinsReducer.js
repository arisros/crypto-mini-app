import { FETCH_COINS, COINS_LOADED } from '../constant/actionTypes'

const initialState = {
  list: [],
  loading: false
}

export default (state = initialState, action) => {

  switch (action.type) {
    case FETCH_COINS:
      return {
        ...state,
        loading: true
      }
    case COINS_LOADED:
      return {
        ...state,
        loading: false,
        list: action.payload
      }
    default:
      return state
  }

}