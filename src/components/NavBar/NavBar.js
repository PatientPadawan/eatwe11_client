import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
  return (
    <nav role="navigation">
      <h1>EATWE11</h1>
      <div className="Nav_linksContainer">
        <button className="button" id="Nav_signUp">Sign Up</button>
        <Link className="Nav_links" to="/demo">Demo</Link>
      </div>
    </nav>
  );
}
