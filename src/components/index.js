import React, { Component, PropTypes } from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import Makeup from './makeup/Makeup'
import './_app.scss'

class App extends Component {

  render() {
    return (
      <div className="app">
        <Header />
        {/* <Makeup /> */}
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App
