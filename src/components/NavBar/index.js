import React from 'react';
import { Link } from 'react-router-dom';

import RegisterForm from '../RegisterForm';

const NavBar = ({
  location,
  toggleModal,
  modal,
}) => {
  const navLinks = (currentLocation) => {
    const routes = ['assess', 'dashboard', 'meals'];
    const links = [];

    (currentLocation === '/') ? links.push(
      <RegisterForm key="sign-up" toggleModal={toggleModal} modal={modal} />,
      <Link
        key="demo"
        to="/assess"
        className="Nav_links capitalize"
      >
        demo
      </Link>,
    ) : routes.forEach((route) => links.push(
      <Link
        key={route}
        to={`/${route}`}
        className={`Nav_links capitalize ${(currentLocation === `/${route}`) ? 'selected' : ''}`}
      >
        {`${route}`}
      </Link>,
    ));
    return links;
  };

  return (
    <nav role="navigation">
      <Link to="/" className="Nav_links"><h1 id="logo">EATWE11</h1></Link>
      <div className="Nav_linksContainer">
        {navLinks(location)}
      </div>
    </nav>
  );
};

export default NavBar;
