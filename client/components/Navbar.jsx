import React, { useState, useEffect, useContext } from 'react'
import UserContext from './UserDetails'
import styles from '../styles.css' // eslint-disable-line no-unused-vars

const Navbar = (props) => {
  const user = useContext(UserContext)

  return (
    <div>
      <nav className="nav">
        <h1>Navbar</h1>
      </nav>
    </div>
  )
}

export default Navbar
