import { FETCH_BALANCE, BALANCE_LOADED, DECREASE_BALANCE } from '../constant/actionTypes'

const initialState = {
  amount: 0,
  loading: false
}

export default (state = initialState, action) => {

  switch (action.type) {
    case FETCH_BALANCE:
      return {
        ...state,
        loading: true
      }
    case BALANCE_LOADED:
      return {
        ...state,
        loading: false,
        amount: state.amount + action.payload
      }
    case DECREASE_BALANCE:
      return {
        ...state,
        amount: state.amount - action.payload
      }
    default:
      return state
  }

}