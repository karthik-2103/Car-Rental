import React from 'react'
import yellowAudi from '../../assets/car images/yellow-audi.png'
import styles from './Home.module.css'

const Home = () => {
  return (
    <div className={styles.container} id='home'>
      <div className={styles.content}>
        <p className={styles.first}>Plan your trip now</p>
        <p className={styles.first}>Save <span style={{color: "#fb5607"}}>big</span> with our car rental</p>
        <p>Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.</p>
        <button href='#' style={{backgroundColor:'#fb5607', color: '#000'}}>Book Ride <i class="bi bi-check-circle-fill"></i></button>
        <button href='#' style={{backgroundColor: '#000', color: '#fff'}}>Learn More <i class="bi bi-caret-right-fill"></i></button>
      </div>
      <div className={styles.homeimg}>
        <img src={yellowAudi} alt="" />
      </div>
    </div>
  )
}

export default Home