import React from 'react'
import { BsCheck } from 'react-icons/bs'
import Nav from '../nav/Nav'
import { Link } from 'react-router-dom'
import Footer from '../footer/Footer'
const Servicios = () => {
  return (
    <div className='services'>
      <Nav />
      <div className='about1'>
        <div>
          <h2 className='ts'>Certified Public Accountant</h2>
          <p className='ts2'>We help you comply with your tax obligations and advise you in a timely manner to avoid high tax payments.</p>
        </div>

        <div>

          <ul>
            <li className='list-group-item ts3'>
              <BsCheck />accounting services
            </li>
            <li className='list-group-item ts3'>
              <BsCheck />Provisional payments
            </li>
            <li className='list-group-item ts3'>
              <BsCheck />Annual statement
            </li>
            <li className='list-group-item ts3'>
              <BsCheck />financial statements
            </li>
          </ul>
          <div style={{ width: '30%', marginLeft: '4%', marginTop: '4rem' }}>
        <Link to='/Contact' className='btn btn-outline-light'>Contact</Link>
      </div>

        </div>
      <Footer />
      </div>
    </div>
  )
}

export default Servicios