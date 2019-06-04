import React from 'react';

// Component Imports
import Logo from './Logo';
import Footer from './Footer';
import Menu from './Menu';

function MenuContainer() {
  return(
    <div className="menu-container shadow">
      <div className="menu-content-container">
        <Logo />
        <Menu />
        <Footer />
      </div>
    </div>
  );
};

export default MenuContainer;