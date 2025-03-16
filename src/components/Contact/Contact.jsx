import React from 'react'
import styles from './Contact.module.css'

const Contact = () => {

  const handleSubscribe = () => {
    window.alert("Subscribed")
  }
  return (
    <div className={styles.container} id='contact'>
      <div className={styles.conContent}>
        <h5>CAR Rental</h5>
        <p>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs.</p>
        <p><span className={styles.icon}><i class="bi bi-telephone-fill"></i></span> (123)-456-789</p>
        <p><span className={styles.icon}><i class="bi bi-envelope-at-fill"></i></span> rental@gmail.com</p>
      </div>
      <div className={styles.conContent}>
        <h5>COMPANY</h5>
        <p>Chennai</p>
        <p>Careers</p>
        <p>Mobile</p>
        <p>Blog</p>
        <p>How we work</p>
      </div>
      <div className={styles.conContent}>
        <h5>WORKING HOURS</h5>
        <p>Mon - Fri : 9:00AM - 9:00PM</p>
        <p>Sat : 9:00AM - 6:00PM</p>
        <p>Sun : closed</p>
      </div>
      <div className={styles.conContent}>
        <h5>SUBSCRIPTION</h5>
        <p>Subscribe your address for latest news & updates.</p>
        <input type="text" placeholder='Enter Email Address' /><br />
        <button type='submit' onClick={()=> handleSubscribe()}>Submit</button>
      </div>
    </div>
  )
}

export default Contact