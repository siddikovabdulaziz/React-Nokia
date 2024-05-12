import React from 'react'
import './Navbar.css'
// import { navbar__list } from '../static'
import { TbWorldLongitude } from "react-icons/tb";
import { LiaSearchSolid } from "react-icons/lia";
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'


function Navbar() {
  return (

    <div className='saqlash'>
      <div className="supheader">
        <p>Careers</p>
        <p>Investors</p>
        <p>Newsroom</p>
      </div>
      <div className="navbar">
        <img className='logo' src={logo} alt="" />


        <ul className='nav__collect'>
          <li className='navbar-item'>
            <a className='navbar-link' href="">Service providers</a>
          </li>

          <li className='navbar-item'>
            <Link to={'Enter'} className='navbar-link' href="">Enterprise and governments</Link>
          </li>

          <li className='navbar-item'>
            <a className='navbar-link' href="">Licensing</a>
          </li>

          <li className='navbar-item'>
            <a className='navbar-link' href="">Insights and research</a>
          </li>

          <li className='navbar-item'>
            <a className='navbar-link' href="">We are Nokia</a>
          </li>
        </ul>

        <div className="icon">
          <h2><TbWorldLongitude /></h2>
          <h2><LiaSearchSolid /></h2>
        </div>

        <div class="nav__menu">
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>

      <div className="kok__nav">
        <ul>
          <li>Solution for Industry  |</li>
          <li>Energy |</li>
          <li>Manufactoring and Logistics |</li>
          <li>Public center |</li>
          <li>Transportation |</li>
          <li> More </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;