import React, { useState } from 'react';
import HamburgerMenu from 'react-hamburger-menu';
import './style.css';

const HamburgerMenuComp = () => {
  const [menuClicked, SetMenuClicked] = useState(false);
  const toggleMenu = () => SetMenuClicked(!menuClicked);
  return (
    <section className="hamburger-container">
      <HamburgerMenu
        isOpen={menuClicked}
        menuClicked={toggleMenu}
        width={23}
        height={14}
        strokeWidth={2}
        rotate={0}
        color="#5D6D6A"
        borderRadius={0}
        animationDuration={0.5}
      />
    </section>
  );
};

export default HamburgerMenuComp;
