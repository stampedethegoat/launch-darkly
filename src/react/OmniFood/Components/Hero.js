import React, { Component } from 'react';
import logoWhite from "../../../assets/images/omni/logo-white.png";
import logo from "../../../assets/images/omni/logo.png";
import { Link } from 'react-router-dom';
import '../../../init/init.css';

const Hero = () => {
    return (
      <div className="omni-header">
        <nav>
          <div className="row">
            <img src={logoWhite} alt="Omnifood Logo" className="logo" />
            <img src={logo} alt="Omnifood Logo" className="logo-black" />
            <ul className="main-nav">
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/formula-one'>Formula One</Link></li>
              <li><Link to='/stocks'>Stocks</Link></li>
              <li><Link to='/nba'>NBA</Link></li>
            </ul>
            <a className="mobile-nav-icon"><i className="ion-navicon-round"></i></a>
          </div>
        </nav>
        <div className="hero-text-box">
          <h1>Goodbye junk food.<br />Hello super healthy meals.</h1>
          <a className="btn btn-full" href="#">I'm hungry</a>
          <a className="btn btn-ghost" href="#">Show me more</a>
        </div>
      </div>
    )
}

export default Hero;