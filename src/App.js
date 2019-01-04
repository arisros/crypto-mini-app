import React, { Component } from 'react'
import Crypto from './components/Crypto'
import AppBar from './components/AppBar'

import './App.css'

class App extends Component {

  componentWillMount() {
  }

  render() {
    return (
      <section className="App">
        <AppBar />
        <Crypto />
      </section>
    )
  }
}

export default App