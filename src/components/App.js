import React, { Component } from 'react'
import Makeup from './makeup/Makeup'
import './_app.scss'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h4>Hey!</h4>
        </header>
        <Makeup />
      </div>
    );
  }
}

export default App
