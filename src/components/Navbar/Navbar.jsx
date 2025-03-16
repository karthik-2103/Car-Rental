import React, { useState } from 'react'
import styles from './Navbar.module.css'
import logo from '../../assets/logo/logo.png'

const Navbar = () => {

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src={logo} alt="" />
        <h2>CAR <span>Rental</span></h2>
      </div>
      <div className={styles.head}>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#booking">Booking</a></li>
          <li><a href="#models">Vehicles</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div className={styles.navbtn}>
        <button type='button'>Register</button>
      </div>
    </nav>
  )
}

export default Navbar