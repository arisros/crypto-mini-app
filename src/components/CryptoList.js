import React from 'react'
import { connect } from 'react-redux'
import { numberWithCommas } from '../utils'
import { DECREASE_BALANCE } from '../constant/actionTypes'

const defaultCurency = process.env.REACT_APP_CURRENCY

const renderPercentage = (percentage) => {
  if (percentage > 0) {
    return <p style={{ color: 'green' }}>{percentage}%</p>
  } else {
    return <p style={{ color: 'red' }}>{percentage}%</p>
  }
}

const renderImage = (imagePath, alt) => {
  if (imagePath) {
    return <img src={`https://www.cryptocompare.com${imagePath}`} alt={alt} />
  }
  return <img src="https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" alt="nopict" />
}

let CryptoList = (props) => {
  const { item, coins, balance, boughtCrypto } = props
  return (
    <tr>
      <td>{renderImage(coins[item.symbol] ? coins[item.symbol]['ImageUrl'] : null, item.symbol)} {item.name}</td>
      <td>Rp {numberWithCommas(Number((item.quote[defaultCurency].price).toFixed(2)))}</td>
      <td>{renderPercentage(item.quote[defaultCurency].percent_change_1h)}</td>
      <td>{renderPercentage(item.quote[defaultCurency].percent_change_24h)}</td>
      <td>{renderPercentage(item.quote[defaultCurency].percent_change_7d)}</td>
      <td>{balance > item.quote[defaultCurency].price
        ? <button className="btn btn-success" onClick={() => boughtCrypto(item.quote[defaultCurency].price)}>Buy</button>
        : ''}</td>
    </tr>
  )
}

const mapStateToProps = (state) => ({
  balance: state.balance.amount,
  coins: state.coins.list,
})

const mapDispatchToProps = dispatch => ({
  boughtCrypto: (payload) => { dispatch({ type: DECREASE_BALANCE, payload }) }
})

CryptoList = connect(mapStateToProps, mapDispatchToProps)(CryptoList)
export default CryptoList
