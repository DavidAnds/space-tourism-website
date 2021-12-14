import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from './shared/logo.svg'
import iconClose from './shared/icon-close.svg'
import iconHamburger from './shared/icon-hamburger.svg'

export default function Navbar(props) {
  const [toggleNav, setToggleNav] = useState(false);

  let toggleFunc = () => {
    setToggleNav(!toggleNav);
  };

  console.log(props);
  return (
    <nav className='navbar'>
      <div className='nav-logo'>
        <Link to='/'>
        <img
          src={logo}
          alt=''
          />
        </Link>
      </div>
      <ul className={toggleNav ? "nav nav--active" : "nav"}>
        <li>
          <Link to='/' className={props.home? 'nav-link nav-text nav-link--active' : 'nav-link nav-text'}>
            <span>00</span>Home
          </Link>
        </li>
        <li>
          <Link to='/destination' className={props.destination? 'nav-link nav-text nav-link--active' : 'nav-link nav-text'}>
            <span>01</span>destination
          </Link>
        </li>
        <li>
          <Link to='/crew' className={props.crew? 'nav-link nav-text nav-link--active' : 'nav-link nav-text'}>
            <span>02</span>Crew
          </Link>
        </li>
        <li>
          <Link to='/technology' className={props.technology? 'nav-link nav-text nav-link--active' : 'nav-link nav-text'}>
            <span>03</span>Technology
          </Link>
        </li>
      </ul>
      <div className='nav-line'></div>
      <button className='toggle-btn' onClick={toggleFunc}>
        <img
          src={
            toggleNav ? iconClose : iconHamburger
          }
          alt=''
        />
      </button>
    </nav>
  );
}
