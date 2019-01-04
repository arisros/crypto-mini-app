import React, { Component } from 'react'
import { connect } from 'react-redux'
import { numberWithCommas } from '../utils'

export class Balance extends Component {

  componentWillMount() {
    this.props.addBalance()
  }

  render() {
    return (
      <h2>
        <b>Balance: </b>Rp {numberWithCommas(Number((this.props.amount).toFixed(2)))}
      </h2>
    )
  }
}

const mapStateToProps = (state) => ({
  amount: state.balance.amount,
})

const mapDispatchToProps = dispatch => ({
  addBalance: () => { dispatch({ type: 'BALANCE_LOADED', payload: 10000000 }) },
})

export default connect(mapStateToProps, mapDispatchToProps)(Balance)
