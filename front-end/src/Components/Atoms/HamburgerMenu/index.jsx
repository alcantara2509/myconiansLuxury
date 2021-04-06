import React, { useState } from 'react';
import HamburgerMenu from 'react-hamburger-menu';
import Colors from '../../../Colors';
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
        color={Colors.primaryColor}
        borderRadius={0}
        animationDuration={0.5}
      />
    </section>
  );
};

export default HamburgerMenuComp;
