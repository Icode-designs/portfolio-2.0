import React from "react";
import portrait from "assets/img/portrait.jpg";

//import styles
import {
  BlueText,
  Button,
  FlexContainer,
  SectionContainer,
} from "styles/Global.style";
import { HomePageContainer, PortraitContainer } from "styles/Home.style";
import Article from "components/Article";
import FeaturedProjects from "components/layouts/FeaturedProjects";

const Home = () => {
  const mediaQuery = window.matchMedia("(max-width: 1024px)");
  const headerText = (
    <>
      Hello there, i'm <BlueText>Bonaventure Ifechukwu</BlueText>
    </>
  );

  const headerParagraph = (
    <>
      I'm a front-end developer with two years of passionate experience in
      building modern, functional, and visually appealing websites. I specialize
      in technologies and frameworks like React.js, Tailwind CSS, Styled
      Components, SCSS, and JavaScript. Welcome to my portfolio! Feel free to
      reach out—I love connecting with new people, both professionally and
      beyond.
    </>
  );
  return (
    <SectionContainer>
      <HomePageContainer>
        <FlexContainer
          $align="center"
          $flexD="column"
          $marginL="auto"
          $marginR="auto"
        >
          <FlexContainer $align="center" $justify="center">
            <PortraitContainer>
              <img src={portrait} alt="portrait" />
            </PortraitContainer>
          </FlexContainer>
          <Article headerText={headerText} headerParagraph={headerParagraph}>
            <Button>Get In Touch</Button>
          </Article>
        </FlexContainer>
        <FeaturedProjects />
      </HomePageContainer>
    </SectionContainer>
  );
};

export default Home;
