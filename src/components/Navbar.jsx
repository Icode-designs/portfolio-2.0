import React from "react";
import { useState } from "react";

//import styles
import {
  HeaderContainer,
  Navbtn,
  Navigation,
  NavMenuContainer,
} from "styles/Navbar.style";

//import react-icons
import { FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

//import components
import NavMenu from "./layouts/NavMenu";
import Logo from "./Logo";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  function handleClick() {
    setNavOpen(!navOpen);
  }
  return (
    <HeaderContainer>
      <Logo />
      <Navigation>
        <Navbtn onClick={handleClick}>
          {navOpen ? <FaTimes /> : <GiHamburgerMenu />}
        </Navbtn>

        {navOpen && <NavMenu />}
      </Navigation>
    </HeaderContainer>
  );
};

export default Navbar;
