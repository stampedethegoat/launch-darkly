import React, { Component } from 'react';
import logoWhite from "../../../assets/images/nba/nba-logo.png";
import logo from "../../../assets/images/omni/logo.png";
import { Link } from 'react-router-dom';
import '../../../init/init.css';

const Hero = () => {
    return (
      <div className="nba-header header">
        <nav>
          <div className="row">
            <img src={logoWhite} alt="NBA Logo" className="nba-logo" />
            <img src={logo} alt="NBA Logo" className="logo-black" />
            <ul className="main-nav">
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/formula-one'>Formula One</Link></li>
              <li><Link to='/stocks'>Stocks</Link></li>
              <li><Link to='/omni'>OmniFood</Link></li>
            </ul>
            <a className="mobile-nav-icon"><i className="ion-navicon-round"></i></a>
          </div>
        </nav>
        <div className="hero-text-box">
          <h1>Showtime.<br />Where Amazing Happens.</h1>
          <a className="btn btn-full btn-nba" href="#">Play</a>
          <a className="btn btn-nba-ghost" href="#">Show me more</a>
        </div>
      </div>
    )
}

export default Hero;