import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav role="navigation">
      <Link to="/" className="Nav_links"><h1 id="logo">EATWE11</h1></Link>
      <div className="Nav_linksContainer">
        <button className="button" id="Nav_signUp" type="button">Sign Up</button>
        <Link to="/dashboard" className="Nav_links">Dashboard</Link>
        <Link to="/meals" className="Nav_links">Meals</Link>
        <Link to="/quiz" className="Nav_links">Biometrics</Link>
      </div>
    </nav>
  );
}
