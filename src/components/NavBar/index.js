import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import RegisterForm from '../RegisterForm';

const NavBar = ({
  location,
  toggleModal,
  modal,
}) => {
  const navLinks = (currentLocation) => {
    const routes = [{
      address: 'assess',
      icon: 'pencil-alt',
    }, {
      address: 'dashboard',
      icon: 'chart-pie',
    }, {
      address: 'meals',
      icon: 'list-ul',
    }];
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
        key={route.address}
        to={`/${route.address}`}
        className={`Nav_links capitalize ${(currentLocation === `/${route.address}`) ? 'selected' : ''}`}
      >
        <div className='navLinksIconsWrapper'>
          <FontAwesomeIcon icon={`${route.icon}`} />
        </div>
        <span className='navLinksText'>
          {`${route.address}`}
        </span>
      </Link>,
    ));
    return links;
  };

  return (
    <header className="header">
      <nav role="navigation">
        <Link to="/"><h1 id="logo">EATWE11</h1></Link>
        <div className="navLinksContainer">
          {navLinks(location)}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
