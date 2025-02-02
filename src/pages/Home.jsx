import React from "react";
import portrait from "assets/img/portrait.jpg";

//import styles
import { BlueText, Button, FlexContainer } from "styles/Global.style";
import { HomePageContainer, PortraitContainer } from "styles/Home.style";
import Article from "components/Article";
import FeaturedProjects from "components/layouts/FeaturedProjects";

const Home = () => {
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
    <HomePageContainer>
      <FlexContainer $align="center" $flexD="column">
        <PortraitContainer>
          <img src={portrait} alt="portrait" />
        </PortraitContainer>

        <Article headerText={headerText} headerParagraph={headerParagraph} />
        <Button>Get In Touch</Button>
      </FlexContainer>
      <FeaturedProjects />
    </HomePageContainer>
  );
};

export default Home;
