require('dotenv').config();
import React from 'react';
import { Link } from 'react-router-dom';
import { withLDProvider } from 'ldclient-react';
import '../../init/init.css';

const Header = ({ children }) => {
  return (
    <div>
      <div className="links">
        <h3><Link to='/'>Home</Link></h3>
        <h3><Link to='/formula-one'>F1</Link></h3>
        <h3><Link to='/stocks'>Stocks</Link></h3>
        <h3><Link to='/stocks'>NBA</Link></h3>
      </div>
      {children}
    </div>
  )
}

export default withLDProvider({ clientSideID: process.env.REACT_APP_LD_CLIENT_ID })(Header);