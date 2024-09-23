import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

function Navbar() {
  return (
    <div className='navbar'>
      <img src={assets.logo} alt="" />
      <ul className='navbar-list'>
        <li>Home</li>
        <li>Student Reviews</li>
        <li>Contact Us</li>
      </ul>
    </div>
  )
}

export default Navbar
