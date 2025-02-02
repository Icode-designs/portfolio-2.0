import React from "react";
import { FlexContainer, FooterContainer } from "styles/Global.style";
import NavMenu from "./layouts/NavMenu";
import Logo from "./Logo";

const Footer = () => {
  return (
    <FooterContainer>
      <FlexContainer $flexD="column" $align="center">
        <Logo />
      </FlexContainer>
    </FooterContainer>
  );
};

export default Footer;
