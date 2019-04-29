import React, { Component, PropTypes } from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import './_app.scss'

class App extends Component {

  render() {
    return (
      <div className="app">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App
