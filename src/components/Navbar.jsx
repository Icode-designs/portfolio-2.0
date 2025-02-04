import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 700) {
        setNavOpen(true);
      } else {
        setNavOpen(false);
      }
    };

    // Run once on mount
    handleResize();

    // Listen for window resize
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [setNavOpen]);

  function handleClick() {
    setNavOpen(!navOpen);
  }
  return (
    <HeaderContainer>
      <Link to="/">
        <Logo />
      </Link>
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
