import React from "react";
import logo from "assets/img/logo.svg";
import { LogoContainer } from "styles/Navbar.style";

const Logo = () => {
  return (
    <LogoContainer>
      <img src={logo} alt="" />
    </LogoContainer>
  );
};

export default Logo;
