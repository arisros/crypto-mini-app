import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FETCH_CRYPTO } from '../constant/actionTypes'

/* todo better sort */
export class Sort extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sort_dir: null,
      sort: 'percent_change_24h'
    }

    this.sortHandler = this.sortHandler.bind(this)
  }

  sortHandler(ev) {
    this.setState({
      sort_dir: ev.target.value
    })
    this.props.onClickSort({
      sort: this.state.sort,
      sort_dir: this.state.sort_dir
    })
  }

  sortBtnClass(sort) {
    if (sort === this.state.sort_dir) return 'btn btn-warning'
    return 'btn btn-success'
  }

  render() {
    return (
      <div className="btn-group-label">
        <label>Sort By 24 Hours: </label>
        <div className="btn-group">
          <button value="asc" className={this.sortBtnClass('asc')}
            disabled={this.state.sort_dir === 'asc'}
            onClick={this.sortHandler}>ASC</button>
          <button value="desc" className={this.sortBtnClass('desc')}
            disabled={this.state.sort_dir === 'desc'}
            onClick={this.sortHandler}>DESC</button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  onClickSort: (query) =>
    dispatch({ type: FETCH_CRYPTO, query })
})

export default connect(null, mapDispatchToProps)(Sort)
