import React from 'react' 
import styles from './Book.module.css'

const Book = () => {
  const handleClick = () => {
    let name = prompt("Enter your name below :")
    window.alert("Hello! " + name + " Your booking is confirmed.. Happy journey..!")
  }

  return (
    <div className={styles.Booking} id='booking'>
      <h4>Book a car</h4>
      <div className={styles.seccol}>
        <div className={styles.section}>
          <h6>Select your car type <span>*</span></h6>
          <select name="Car type">
            <option value="Select your car type">Select your car type</option>
            <option value="Audi R8">Audi R8</option>
            <option value="VW Golf 6">VW Golf 6</option>
            <option value="Toyoto Camry">Toyoto Camry</option>
            <option value="Bmw 320 ModernLine">Bmw 320 ModernLine</option>
            <option value="Mercedes-Benz GLK">Mercedes-Benz GLK</option>
            <option value="VW passat CC">VW passat CC</option>
          </select>
        </div>
        <div className={styles.section}>
          <h6>Pick-up <span>*</span></h6>
          <select name="Pick-up">
            <option value="Select Pick up location">Select Pick up location</option>
            <option value="Chennai Central">Chennai Central</option>
            <option value="Egmore">Egmore</option>
            <option value="Adyar">Adyar</option>
            <option value="Parris">Parris</option>
            <option value="Chepak">Chepak</option>
          </select>
        </div>
        <div className={styles.section}>
          <h6>Drop-of <span>*</span></h6>
          <select name="Drop-of">
            <option value="Select Drop off location">Select Pick up location</option>
            <option value="Chepak">Chepak</option>
            <option value="Parris">Parris</option>
            <option value="Chennai Central">Chennai Central</option>
            <option value="Adyar">Adyar</option>
            <option value="Egmore">Egmore</option>
          </select>
        </div>
        <div className={styles.section}>
          <h6>Pick-up <span>*</span></h6>
          <input type="datetime-local" />
        </div>
        <div className={styles.section}>
          <h6>Drop-of <span>*</span></h6>
          <input type='datetime-local' />
        </div>
        <div className={styles.section}>
          <button href="#" className={styles.search} onClick={()=> handleClick()}>Search</button>
        </div>
      </div>

      <div className={styles.bookinfo}>
        <h4 style={{ color: "orangered" }}>Plan your trip now</h4>
        <h1>Quick & easy car rental</h1>
        <div className={styles.explanation}>
          <div>
            <span className={styles.icons}><i class="bi bi-car-front-fill customIcon"></i></span>
            <h5>Select Car</h5>
            <p>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs</p>
          </div>
          <div>
            <span className={styles.icons}><i class="bi bi-chat-dots-fill"></i></span>
            <h5>Contact Operator</h5>
            <p>Our knowledgeable and friendly operators are always ready to help with any questions of concerns</p>
          </div>
          <div>
            <span className={styles.icons}><i class="bi bi-rocket-takeoff-fill"></i></span>
            <h5>Let's Drive</h5>
            <p>Whether you're hitting the open road. we've got you covered with our wide range of cars</p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Book