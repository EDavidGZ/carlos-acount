import React from 'react'
import './nav.css'
import { Link } from 'react-router-dom'
import {FiBookOpen} from 'react-icons/fi'


const Nav = () => {
  return (
<nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid" style={{marginRight: '3rem', fontSize: '1.2rem'}}>
    <Link className=" nav-link" to="/"><FiBookOpen className='book'/><small className='titleprin'>accountancy...</small></Link>
    <ul>
      <button className="login">log in</button>
      <button className="check">check in</button>
    </ul>
      {/* <ul className="navbar-nav">
      <Link className=" nav-link " to="/Servicios"> Servicios contables </Link>
      <Link className=" nav-link " to="/Pagos"> Pagos provisionales </Link>
      <Link className=" nav-link " to="/Declaracion"> Declaracion anual </Link>
      <Link className=" nav-link " to="/Estados"> Estados financieros </Link>


      </ul> */}
  </div>
</nav> )
}

export default Nav