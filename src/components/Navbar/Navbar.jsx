import React from 'react'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
  return (
    <header>
        <h1>Equipamiento de protección personal</h1>

        <nav>
            <ul>
                <li>Cascos</li>
                <li>Overall</li>
                <li>Zapatos de seguridad</li>
            </ul>
        </nav>

        <CartWidget/>

    </header>
  )
}

export default Navbar