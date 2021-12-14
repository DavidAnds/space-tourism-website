import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [toggleNav, setToggleNav] = useState(false);

  let toggleFunc = () => {
    setToggleNav(!toggleNav);
  };

  return (
    <nav className='navbar'>
      <div className='nav-logo'>
        <img
          src={`${process.env.PUBLIC_URL + "/assets/shared/logo.svg"}`}
          alt=''
        />
      </div>
      <ul className={toggleNav ? "nav nav--active" : "nav"}>
        <li>
          <Link to='/' className='nav-link nav-text'>
            <span>00</span>Home
          </Link>
        </li>
        <li>
          <Link to='/' className='nav-link nav-text'>
            <span>01</span>destination
          </Link>
        </li>
        <li>
          <Link to='/' className='nav-link nav-text'>
            <span>02</span>Crew
          </Link>
        </li>
        <li>
          <Link to='/' className='nav-link nav-text'>
            <span>03</span>Technology
          </Link>
        </li>
      </ul>
      <div className='nav-line'></div>
      <button className='toggle-btn' onClick={toggleFunc}>
        <img
          src={
            toggleNav
              ? `${process.env.PUBLIC_URL + "/assets/shared/icon-close.svg"}`
              : `${
                  process.env.PUBLIC_URL + "/assets/shared/icon-hamburger.svg"
                }`
          }
          alt=''
        />
      </button>
    </nav>
  );
}
