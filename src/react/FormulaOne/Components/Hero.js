import React, { Component } from 'react';
import logoWhite from "../../../assets/images/f1/logo-white.png";
import logo from "../../../assets/images/omni/logo.png";
import { Link } from 'react-router-dom';
import '../../../init/init.css';

const Hero = () => {
    return (
      <div className="f1-header header">
        <nav>
          <div className="row">
            <img src={logoWhite} alt="FormulaOne Logo" className="f1-logo" />
            <img src={logo} alt="FormulaOne Logo" className="logo-black" />
            <ul className="main-nav">
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/stocks'>Stocks</Link></li>
              <li><Link to='/nba'>NBA</Link></li>
              <li><Link to='/omni'>OmniFood</Link></li>
            </ul>
            <a className="mobile-nav-icon"><i className="ion-navicon-round"></i></a>
          </div>
        </nav>
        <div className="hero-text-box">
          <h1>Formula One. <br />The Drive to Survive.</h1>
          <a className="btn btn-full btn-f1" href="#">Race Me</a>
          <a className="btn btn-f1-ghost" href="#">Show me more</a>
        </div>
      </div>
    )
}

export default Hero;