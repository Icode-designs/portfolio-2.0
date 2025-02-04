import React from "react";
import { FlexContainer, FooterContainer } from "styles/Global.style";
import NavMenu from "./layouts/NavMenu";
import Logo from "./Logo";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <FooterContainer>
      <FlexContainer $flexD="column" $align="center">
        <Link to="/Home">
          <Logo />
        </Link>
      </FlexContainer>
    </FooterContainer>
  );
};

export default Footer;
