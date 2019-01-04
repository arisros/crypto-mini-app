import React, { Component } from 'react'
import { connect } from 'react-redux'

import CryptoList from './CryptoList'
import { FETCH_CRYPTO, DECREASE_BALANCE, FETCH_COINS } from '../constant/actionTypes'

export class Crypto extends Component {
  componentWillMount() {
    this.props.fetchCrypto()
    this.props.fetchCoins()
  }

  render() {
    let listCrypto = this.props.cryptoList 
      ? this.props.cryptoList.map((v, id) => 
        <CryptoList item={v} key={id} /> )
      : null
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <td>Name</td>
            <td>Price (IDR)</td>
            <td>Hour</td>
            <td>Day</td>
            <td>Week</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {this.props.loading ? <tr><td colSpan="6"><h2>Loading...</h2></td></tr> : null}
          {this.props.loading ? null : listCrypto}
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = (state) => ({
  cryptoList: state.crypto.list,
  balance: state.balance.amount,
  loading: state.crypto.loading
})

const mapDispatchToProps = dispatch => ({
  fetchCrypto: () => { dispatch({ type: FETCH_CRYPTO }) },
  fetchCoins: () => { dispatch({ type: FETCH_COINS }) },
  boughtCrypto: (payload) => { dispatch({ type: DECREASE_BALANCE, payload  }) }
})

export default connect(mapStateToProps, mapDispatchToProps)(Crypto)
