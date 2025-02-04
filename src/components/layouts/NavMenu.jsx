import React from "react";
import { Link } from "react-router-dom";
import { NavList, NavMenuContainer } from "styles/Navbar.style";

const NavMenu = () => {
  return (
    <NavMenuContainer>
      <NavList>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Projects">Projects</Link>
        </li>
        <li>
          <Link to="/About">About Me</Link>
        </li>
        <li>
          <Link to="/Contact">Reach Out</Link>
        </li>
      </NavList>
    </NavMenuContainer>
  );
};

export default NavMenu;
