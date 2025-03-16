import React, { useState, useEffect } from 'react'
import styles from './Models.module.css'
import car1 from '../../assets/car images/1.png'
import car2 from '../../assets/car images/2.png'
import car3 from '../../assets/car images/3.png'
import car4 from '../../assets/car images/4.png'
import car5 from '../../assets/car images/5.png'
import car6 from '../../assets/car images/6.png'
const Models = () => {
  const cars = [
    {
      'Image': car1,
      'Rent': '₹4500',
      'Name': "Audi",
      'Brand': "Audi",
      'Model': "R8",
      'Year': 2012,
      'Doors': '4/5',
      'ac': "Yes",
      'Transmission': "Manual",
      'Fuel': "Gasoline"
    },
    {
      'Image': car2,
      'Rent': '₹3800',
      'Name': "VW Golf 6",
      'Brand': "Volkswagen",
      'Model': "Golf 6",
      'Year': 2008,
      'Doors': '4/5',
      'ac': "Yes",
      'Transmission': "Manual",
      'Fuel': "Diesel"
    },
    {
      'Image': car3,
      'Rent': '₹3500',
      'Name': "Toyoto Camry",
      'Brand': "Toyoto",
      'Model': "Camry",
      'Year': 2006,
      'Doors': '4/5',
      'ac': "Yes",
      'Transmission': "Automatic",
      'Fuel': "Hybrid"
    },
    {
      'Image': car4,
      'Rent': '₹4800',
      'Name': "BMW 320 ModernLine",
      'Brand': "BMW",
      'Model': "320",
      'Year': 2012,
      'Doors': '4/5',
      'ac': "Yes",
      'Transmission': "Manual",
      'Fuel': "Diesel"
    },
    {
      'Image': car5,
      'Rent': '₹4200',
      'Name': "Mercedes-Benz GLK",
      'Brand': "Mercedes",
      'Model': "GLK",
      'Year': 2006,
      'Doors': '4/5',
      'ac': "Yes",
      'Transmission': "Manual",
      'Fuel': "Diesel"
    },
    {
      'Image': car6,
      'Rent': '₹4000',
      'Name': "VW Passat CC",
      'Brand': "Volkswagen",
      'Model': "Passat CC",
      'Year': 2008,
      'Doors': '4/5',
      'ac': "Yes",
      'Transmission': "Automatic",
      'Fuel': "Gasoline"
    }
  ]
  const [selectCar, SetSelectCar] = useState(cars[0])

  useEffect(() => {
    SetSelectCar(selectCar)
  }, [])

  return (
    <div className={styles.modelscontainer} id='models'>
      <div className={styles.modelsheading}>
        <h5 style={{ color: "orangered" }}>Vehicle Models</h5>
        <h1>Our rental fleet</h1>
        <p>Choose from a variety of our amazing vehicles to rent for your next adventure or business trip</p>
      </div>
      <div className={styles.modelscar}>
        <div className={styles.modelscarname}>
          {cars.map((car, index) => (
            <button key={index} onClick={() => SetSelectCar(car)}>{car.Name}
            </button>
          ))}
        </div>
        <div className={styles.modelscarimg}>
          <img src={selectCar.Image} alt="" />
        </div>
        <div className={styles.modelscardata}>
          <table>
            <tbody id="table-body">
              <tr className={styles.rent}>
                <td style={{color:"white"}}>Rent </td>
                <td style={{color:"white"}}>{selectCar.Rent} / day</td>
              </tr>
              <tr>
                <td>Brand </td>
                <td>{selectCar.Brand}</td>
              </tr>
              <tr>
                <td>Model </td>
                <td>{selectCar.Model}</td>
              </tr>
              <tr>
                <td>Year </td>
                <td>{selectCar.Year}</td>
              </tr>
              <tr>
                <td>Doors </td>
                <td>{selectCar.Doors}</td>
              </tr>
              <tr>
                <td>AC </td>
                <td>{selectCar.ac}</td>
              </tr>
              <tr>
                <td>Transmission </td>
                <td>{selectCar.Transmission}</td>
              </tr>
              <tr>
                <td>Fuel </td>
                <td>{selectCar.Fuel}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Models