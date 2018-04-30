import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import { Home } from '../home'
import css from './App.css'

class App extends Component {
  render() {
    return (
      <div className={css.app}>
        <Home />
      </div>
    )
  }
}

export default hot(module)(App)
