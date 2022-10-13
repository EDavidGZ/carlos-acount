import React from 'react'
import './home.css'
import Nav from '../nav/Nav'
import Me from '../../img/me.png'
import { Link } from 'react-router-dom'
import Footer from '../footer/Footer'

const Home = () => {
  return (
    <div className='header'>
      <Nav />
      <div className='home'>

        <div className='abouttxt'>
          <h2 className='tt1'>Prepare</h2>
          <h2 className='tt1'>for the</h2>
          <h2 className='tt1'>future</h2>

          <Link to='/About' className='btn btn-outline-light'>more information</Link>
        </div>
            <img src={Me} alt="" className='me ' />
      </div>
      <Footer />
    </div>
  )
}

export default Home