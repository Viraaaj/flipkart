import React, { Component } from 'react'
import Cards from './components/Cards'
import Header from './components/Header'

export class App extends Component {
  render() {
    return (
      <div style={{ width:"100%" }} >
        <Header />
        <Cards />
      </div>
    )
  }
}

export default App
