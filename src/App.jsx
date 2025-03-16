import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './App.module.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Book from './components/Booking/Book'
import Models from './components/Models/Models';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import 'bootstrap-icons/font/bootstrap-icons.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Book />
      <Models />
      <About />
      <Contact />
    </div>
  )
}

export default App