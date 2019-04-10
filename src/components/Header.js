import React, { Component } from 'react'
import ListButtons from './Navbar'
import './_header.scss'

class Header extends Component {
    constructor(...props) {
        super(...props)
        this.state = {
            buttons: [
                {id: 1, name: 'Crea un evento'},
                {id: 2, name: 'Inicia sesión'},
                {id: 3, name: 'Regístrate'}
            ]
        }
    }
  render() {
    return (
        <header className="header">
            <div className="brand">
                <img src="https://user-images.githubusercontent.com/32284212/37991844-dd31921e-31cf-11e8-9ac2-c2966feba60b.png" alt="logo"/>
            </div>
            <ListButtons buttons={this.state.buttons} />
        </header>
    )
  }
}

export default Header
