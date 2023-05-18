import React from 'react'
import './nav.css'
import { Link } from 'react-router-dom'
import {FiBookOpen} from 'react-icons/fi'


const Nav = () => {
  return (
<nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid" style={{marginRight: '3rem', fontSize: '1.2rem'}}>
    <Link className=" nav-link" to="/"><FiBookOpen className='book'/><small className='titleprin'>accountancy...</small></Link>
  </div>
</nav> )
}

export default Nav