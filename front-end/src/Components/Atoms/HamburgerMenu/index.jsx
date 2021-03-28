import React, { useState } from 'react';
import HamburgerMenu from 'react-hamburger-menu';

const HamburgerMenuComp = () => {
  const [menuClicked, SetMenuClicked] = useState(false);
  const toggleMenu = () => SetMenuClicked(!menuClicked);
  return (
    <HamburgerMenu
      isOpen={menuClicked}
      menuClicked={toggleMenu}
      width={32}
      height={18}
      strokeWidth={2}
      // rotate={0}
      // color='black'
      // borderRadius={0}
      // animationDuration={0.5}
    />
  );
};

export default HamburgerMenuComp;
