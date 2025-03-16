import React from 'react'
import styles from './About.module.css'

const About = () => {
  return (
    <div className={styles.about} id='about'>
      <div className={styles.banner}>
        <h2 style={{color:"white",fontWeight:"600"}}>Save big with our cheap car rental!</h2>
        <h6 style={{color:"#fb5607"}}>Top Airports. Local Suppliers. 24/7 Support.</h6>
      </div>
      <div className={styles.chooseus}>
        <h6 style={{color:"#fb5607"}}>Why Choose Us</h6>
        <h2>Best valued deals you will ever find</h2>
        <p>Discover the best deals you'll ever find with our unbeatable offers. We're dedicated to providing you with the best value for money. so you can enjoy top-quality services and products without breaking the bank. Our deals are designed to give you the ultimate renting experience.so don't miss out on your chance to save big.</p>
      </div>
      <div className={styles.aboutinfo}>
          <div>
          <span className={styles.icons}><i class="bi bi-globe-central-south-asia"></i></span>
            <h5>Cross Country Drive</h5>
            <p>Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures</p>
          </div>
          <div>
          <span className={styles.icons}><i class="bi bi-cash-coin"></i></span>
            <h5>All Inclusive Pricing</h5>
            <p>Get everything you need in oue convenient. transparent price with our all-inclusive pricing policy</p>
          </div>
          <div>
          <span className={styles.icons}><i class="bi bi-wallet-fill"></i></span>
            <h5>No Hidden Charges</h5>
            <p>Enjoy peace of mind with our no hidden charges policy. we believe in transparent and honest pricing.</p>
          </div>
        </div>
    </div>
  )
}

export default About