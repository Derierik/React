import React from 'react'
import { CartWidget } from '../CartWidget/CartWidget'
import './Navbar.css'

const Navbar = () => {
  return (
    <header>
        <h4>EPP Online</h4>

        <nav>
            <ul>
                <li>Cascos</li>
                <li>Zapatos</li>
                <li>Overall</li>
            </ul>
        </nav>
        

        <CartWidget/>
    </header>
  )
}

export default Navbar