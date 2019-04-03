import React, { Component } from 'react';
import logoWhite from "../../../assets/images/stocks/logo-white.png";
import { Link } from 'react-router-dom';
import '../../../init/init.css';

const Hero = () => {
    return (
      <div className="header stocks-header">
        <nav>
          <div className="row">
            <img src={logoWhite} alt="Stocks Logo" className="stocks-logo" />
            <ul className="main-nav">
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/formula-one'>Formula One</Link></li>
              <li><Link to='/nba'>NBA</Link></li>
              <li><Link to='/omni'>OmniFood</Link></li>
            </ul>
            <a className="mobile-nav-icon"><i className="ion-navicon-round"></i></a>
          </div>
        </nav>
        <div className="hero-text-box">
          <h1>Risk is a part of God's game.</h1>
          <a className="btn btn-full btn-stocks" href="#">Invest</a>
          <a className="btn btn-stocks-ghost" href="#">Show me more</a>
        </div>
      </div>
    )
}

export default Hero;